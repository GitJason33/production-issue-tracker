## side notes about packages

- using `react-icons` is better than font-awesome.

- using `react-hook-form` is a beast for form submits.

- using `typescript` is sometimes pure gold, and sometimes pure trash (when it throws random errors where a variable is any or unknown and some other unexpected).

- using `classnames` is great to structure readable css utility class with conditional styling. for small cases, not needed.

- using `radix-ui` is very nice to buy us time, and not style from scratch every simple thing.

- using `react-simple-mde` with `easymde` gives us a very nice editor as a textarea, but I am still confused on how would they be put in db and rendered correctly when retrieved.

- using `prisma` as a database ORM is nice, but it also somehow made the table in pgadmin 4 inaccessible, only by right click/view rows.

- using `zod` for input validation on requests is nice, but the error msg is ugly as fuck.



## about next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
