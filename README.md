# SafeBase Backend

## Local dev
1. Install Node.js 20+
2. Run `npm install`
3. Set `DATABASE_URL` in a `.env` file
4. Run `npx prisma generate`
5. Run `npx prisma db push`
6. Run `npm run dev`

## Railway deploy
1. Create a new Railway project from this GitHub repo.
2. Add a PostgreSQL database.
3. Set `DATABASE_URL` from Railway's database connection string.
4. Set `JWT_SECRET`.
5. Deploy.

## API routes
- GET `/api/employees`
- PUT `/api/employees/:id`
- DELETE `/api/employees/:id`
- GET `/api/incidents`
- PUT `/api/incidents/:id`
- DELETE `/api/incidents/:id`

## Next step
Add auth, uploads, and sync endpoints.
