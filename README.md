# E-commerce (React + Express + MongoDB)

Full-stack demo shop with product browsing, product detail, and a client-side cart.

## Tech
- Frontend: React 18, React Router 6, Vite, TypeScript, CSS
- Backend: Node.js, Express.js, Mongoose (MongoDB)

## Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

## Setup
1. Install deps:
   - `npm install`
2. Configure environment:
   - Server expects `MONGODB_URI`, `PORT` (default 5000), `CLIENT_ORIGIN` (default http://localhost:5173)
   - Client expects `VITE_API_BASE_URL` (default http://localhost:5000)
   - You can set these in environment variables or create `.env` files in `server/` and `client/` respectively.
3. Seed database:
   - `npm run seed`
4. Run dev (client and server):
   - `npm run dev`

## Scripts
- Root:
  - `dev` – runs server and client together
  - `build` – builds server and client
  - `start` – starts built server
  - `seed` – seeds MongoDB with sample data
- Server:
  - `npm run dev -w server` – dev server
  - `npm run build -w server` – build
  - `npm run start -w server` – start build
  - `npm run seed -w server` – seed data
- Client:
  - `npm run dev -w client` – dev frontend
  - `npm run build -w client` – build frontend
  - `npm run preview -w client` – preview build

## API
- `GET /api/health`
- `GET /api/categories`
- `GET /api/products?q&category&sort&page&limit`
- `GET /api/products/:id`

## Notes
- Cart is stored in `localStorage`.
- Images use remote placeholders (Unsplash). Internet required for images.

