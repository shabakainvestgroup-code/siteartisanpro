import { NextResponse } from "next/server";

// Réception des demandes de contact.
// Structure pensée pour être branchée facilement sur un CRM, un envoi
// d'email ou une base de données : il suffit d'ajouter le traitement
// souhaité à l'endroit indiqué ci-dessous.

interface Lead {
  name: string;
  company: string;
  trade: string;
  country: string;
  phone: string;
  email: string;
  message: string;
  currency: string;
  language: string;
  option: string;
  locale: string;
  receivedAt: string;
}

const MAX_LEN = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_LEN);
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Piège anti-spam : le champ caché « website » doit rester vide.
  // On répond OK pour ne pas donner d'indice aux robots.
  if (clean(raw.website)) {
    return NextResponse.json({ ok: true });
  }

  const lead: Lead = {
    name: clean(raw.name),
    company: clean(raw.company),
    trade: clean(raw.trade),
    country: clean(raw.country),
    phone: clean(raw.phone),
    email: clean(raw.email),
    message: clean(raw.message),
    currency: clean(raw.currency),
    language: clean(raw.language),
    option: clean(raw.option),
    locale: clean(raw.locale),
    receivedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email || !lead.phone) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  // Trace serveur (visible dans les logs d'hébergement)
  console.log("[contact] new lead:", JSON.stringify(lead));

  // ── Point de branchement CRM / email / base de données / webhook ──
  // Si CONTACT_WEBHOOK_URL est défini (n8n, Make, Zapier, CRM…),
  // la demande y est transmise en JSON.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Le webhook ne doit pas faire échouer la demande côté visiteur.
      console.error("[contact] webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
