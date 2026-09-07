# Cyberflix Systems LLP — Final Full Stack

## Stack
- React + Vite frontend
- Vercel Serverless API
- Supabase Postgres database
- Custom cookie session authentication
- Product catalogue, product details, search/filter, wishlist, PC Builder, compatibility, cart, checkout, orders

## 1. Supabase setup
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy Project URL and the server-only service role key.

## 2. Vercel setup
In Vercel → Project → Settings → Environment Variables add:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Use Production + Preview as needed. Redeploy after changing environment variables.

## 3. GitHub update
Replace the repository files with this project and push to the `main` branch. Vercel Git integration automatically creates a new deployment from the push.

## 4. Local development
```bash
npm install
npm run dev
```
Create `.env.local` with the two Supabase server variables for local API testing.

## Important security
Never put `SUPABASE_SERVICE_ROLE_KEY` in frontend code or any `VITE_` variable. It is server-only.
