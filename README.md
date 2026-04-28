# Travel Train Dashboard

Local dashboard that displays a hardcoded train timeline (from your itinerary) and provides platform-lookup links.

## What it does

- Stores train legs directly in `app.js` (hardcoded)
- Includes train number, departure/arrival times, station names, addresses, and known platforms
- Includes links to day-of platform lookup pages
- Serves a lightweight dashboard (`index.html`, `app.js`, `styles.css`)

## Quick start (local)

```bash
cd projects/travel-train-dashboard
npm run dev
```

Open: `http://localhost:4173`

## Train numbers resolved online

Two missing train numbers were resolved via online timetable lookup:

- Firenze Santa Maria Novella → Perugia: **RE 4079**
- Spello → Perugia: **RE 4082**

Platform assignments for some regional legs remain day-of operational data, so check the linked live board before departure.

## GitHub prep

```bash
cd projects/travel-train-dashboard
git init
git add .
git commit -m "Initial train dashboard"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
cd projects/travel-train-dashboard
vercel
vercel --prod
```

### Option B: GitHub import

1. Go to Vercel dashboard
2. "Add New Project" -> Import your GitHub repo
3. Framework preset: **Other** (static)
4. Build command: *(leave empty)*
5. Output directory: *(leave empty)*
6. Deploy

## Notes

- Current extraction is tailored to this itinerary format and fields.
- Two train legs in the source document do not include a train number, so those appear as `Missing` in the dashboard.
