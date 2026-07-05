# Site Artisan Pro / TradeSite Express

Landing page bilingue (FR/EN) de vente de sites web pour artisans du bâtiment.
Mobile-first, multi-devises (EUR / USD / GBP), formulaire de contact prêt à
brancher sur un CRM ou un webhook.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- Aucune base de données requise pour la V1

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000 → redirige vers /fr ou /en
npm run build      # build de production
npm start          # serveur de production
```

## Structure

| Chemin | Rôle |
|---|---|
| `app/[locale]/page.tsx` | Landing page (13 sections) |
| `app/[locale]/[slug]/page.tsx` | Pages légales (mentions, confidentialité, CGV) |
| `app/api/contact/route.ts` | Réception des demandes (+ webhook optionnel) |
| `components/` | Header, Hero, sections, formulaire, footer… |
| `lib/i18n/fr.ts` / `lib/i18n/en.ts` | **Tous les textes du site** (à modifier ici) |
| `lib/currency.ts` | Devises et prix (99 € / $ / £, sans conversion) |
| `middleware.ts` | Détection de langue → `/fr` ou `/en` |

## Modifier les contenus

- **Textes FR** : `lib/i18n/fr.ts` — **Textes EN** : `lib/i18n/en.ts`
- **Prix / devises** : `lib/currency.ts` (`BASE_PRICE`, symboles)
- **Contact** : uniquement via WhatsApp (+33 7 43 04 27 57) — clé
  `footer.whatsapp` ; adresse : `footer.address` (Rue des Jacobins, 80000 Amiens)
- **Logos** : `public/logo-fr.png` (Site Artisan Pro) et `public/logo-en.png`
  (TradeSite Express) ; favicon généré dans `app/icon.png`
- **Photos** : `public/images/` (hero, offre, confiance, bénéfices) — photos
  Unsplash libres d'utilisation commerciale ; textes alternatifs dans la clé
  `photos` de chaque dictionnaire
- **Pages légales** : clés `legalPages` (les passages `[à compléter]` sont à
  remplir avant mise en production)

## Formulaire de contact

Les demandes sont envoyées à `POST /api/contact`, journalisées côté serveur,
puis transmises en JSON au webhook défini dans `CONTACT_WEBHOOK_URL`
(n8n, Make, Zapier, CRM…). Voir `.env.example`.

## Variables d'environnement

```
NEXT_PUBLIC_SITE_URL   # URL publique (SEO, Open Graph, hreflang)
CONTACT_WEBHOOK_URL    # optionnel : webhook recevant chaque lead
```

## Évolutions prévues par la structure

Paiement en ligne, espace admin, CRM, blog, pages métiers / pays / services :
l'App Router permet d'ajouter ces routes sans toucher à l'existant
(`app/[locale]/blog`, `app/admin`, etc.).

## Avant la mise en production

- [ ] Compléter les mentions légales, la politique de confidentialité et les CGV
      (raison sociale, hébergeur, immatriculation)
- [ ] Définir `NEXT_PUBLIC_SITE_URL`
- [ ] Ajouter une image Open Graph (`app/opengraph-image.png`)
