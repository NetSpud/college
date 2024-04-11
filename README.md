# Canterbury college programming website




- Home page content is under `src/app/page.tsx`
- About content is under `src/app/about`
- Contact page content is under `src/app/contact`
- Components folder holds commonly used components throughout the website (`/src/app/components`)


Lesson content can be found in `/src/app/lessons[slug]/page.tsx`

The `[slug]` wildcard allows lesson numbers 1-8 (i.e. "/lessons/1")

The content for each lesson can be found under their respective function, within the `/single-pages` folder

For example, lesson 1 content can be found under the `Lesson1` function in `/src/app/lessons/single-pages/l1.tsx`

This application also makes use of `next/link`, which is a Next.js component that allows for client-side navigation between pages. It's effectively the same as an `<a>` tag, but it doesn't reload the page when navigating to a different page on the same site.


# DEVELOPMENT

WEB URL: [webassignment-nine.vercel.app](webassignment-nine.vercel.app)
If you want to run the webpage, you'll need NodeJS installed. If you'd rather not, please use the URL provided instead.

## Getting Started

First, install packages:

```bash
npm install
```

Then, run the development server

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
