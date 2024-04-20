This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
1. Clone the repository
2. Create a copy from ```.env.template``` file and rename it to ```.env``` and  change the env variables
3. Install dependencies```npm install```
4. Start database server with the command ```docker compose up -d```
5. Run Prisma migrations ```npx prisma migrate dev```
6. Execute seed ```npm run seed```
7. Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

