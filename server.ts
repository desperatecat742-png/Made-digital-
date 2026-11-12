import 'dotenv/config';
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

interface InquiryPayload {
  fullName: string;
  businessName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  description: string;
}

interface StoredInquiry extends InquiryPayload {
  id: string;
  createdAt: string;
}

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJsonArray<T>(filePath: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, timestamp: new Date().toISOString() });
  });

  app.post('/api/inquiries', async (req, res) => {
    const body = (req.body ?? {}) as Partial<InquiryPayload>;

    const fullName = String(body.fullName ?? '').trim();
    const businessName = String(body.businessName ?? '').trim();
    const email = String(body.email ?? '').trim();
    const whatsappNumber = String(body.whatsappNumber ?? '').trim();
    const websiteType = String(body.websiteType ?? '').trim();
    const description = String(body.description ?? '').trim();

    const errors: Record<string, string> = {};
    if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
    if (businessName.length < 2) errors.businessName = 'Please enter your business or organization name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.';
    if (whatsappNumber.replace(/[^\d]/g, '').length < 7) {
      errors.whatsappNumber = 'Please enter a valid WhatsApp or phone number.';
    }
    if (!websiteType) errors.websiteType = 'Please select the type of website you need.';
    if (description.length < 15) {
      errors.description = 'Please describe your project goals in at least 15 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({ ok: false, message: 'Please correct the highlighted fields.', errors });
      return;
    }

    const record: StoredInquiry = {
      id: `INQ-${Date.now().toString(36).toUpperCase()}`,
      fullName,
      businessName,
      email,
      whatsappNumber,
      websiteType,
      description,
      createdAt: new Date().toISOString(),
    };

    try {
      await ensureDataDir();
      const existing = await readJsonArray<StoredInquiry>(INQUIRIES_FILE);
      existing.push(record);
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf8');

      let forwardedToWebhook = false;
      const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          const hookRes = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(record),
          });
          forwardedToWebhook = hookRes.ok;
        } catch {
          forwardedToWebhook = false;
        }
      }

      res.status(201).json({
        ok: true,
        inquiryId: record.id,
        createdAt: record.createdAt,
        forwardedToWebhook,
        message: 'Your website request has been logged with our team.',
      });
    } catch (err) {
      console.error('Failed to store inquiry:', err);
      res.status(500).json({
        ok: false,
        message: 'Unable to save your request right now. Please reach us directly on WhatsApp.',
      });
    }
  });

  app.get('/api/testimonials', async (_req, res) => {
    try {
      const raw = await fs.readFile(TESTIMONIALS_FILE, 'utf8');
      const data = JSON.parse(raw);
      res.json({ ok: true, items: Array.isArray(data) ? data : null });
    } catch {
      res.json({ ok: true, items: null });
    }
  });

  app.put('/api/testimonials', async (req, res) => {
    const items = req.body?.items;
    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ ok: false, message: 'A non-empty testimonials array is required.' });
      return;
    }

    try {
      await ensureDataDir();
      await fs.writeFile(TESTIMONIALS_FILE, JSON.stringify(items, null, 2), 'utf8');
      res.json({ ok: true, items });
    } catch (err) {
      console.error('Failed to save testimonials:', err);
      res.status(500).json({ ok: false, message: 'Failed to save testimonials.' });
    }
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server error:', err);
  process.exit(1);
});
