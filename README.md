# Havnen Anlegg AS – Nettside

Landingsside for Havnen Anlegg AS. Statisk HTML/CSS/JS, klar for deploy via Vercel.

## Lokal utvikling

Åpne `index.html` direkte i nettlesar, eller bruk ein lokal server:

```bash
npx serve .
# eller
python -m http.server 8080
```

## Deploy til Vercel

1. Push repo til GitHub
2. Importer repoet på [vercel.com](https://vercel.com)
3. Framework: **Other** (statisk side)
4. Deploy – ferdig!

## Struktur

```
04_NETTSTAD/
├── index.html        # Hovudside
├── style.css         # All styling
├── main.js           # Interaksjon og animasjonar
├── vercel.json       # Vercel-konfigurasjon
└── .gitignore
```

## Om nettsida

- Responsiv (mobil, nettbrett, desktop)
- Ingen rammeverk eller build-steg
- Google Fonts: Inter + Montserrat
- Seksjonar: Hero, Om oss, Tenester, Maskinpark, Prosjekt, Sertifiseringar, Kontakt, Footer
