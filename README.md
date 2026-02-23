# Glowvera Skincare Website

This is a Next.js project for the Glowvera skincare website, focusing on premium organic skincare products.

## Project Structure

-   `app/`: Contains the main application logic, pages, components, and API routes.
-   `public/`: Static assets like images.
-   `history/`: Prompt History Records and other project history.
-   `specs/`: Specification documents.

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed to [Vercel](https://vercel.com).

### Vercel Deployment Instructions:

1.  **Push to GitHub:** Ensure your project is pushed to a GitHub repository.
2.  **Connect Vercel:**
    -   Go to [Vercel](https://vercel.com) and sign up/log in.
    -   Click "Add New..." and then "Project".
    -   Import your GitHub repository.
3.  **Configure Environment Variables:**
    -   In your Vercel project settings, navigate to "Environment Variables".
    -   Add `GMAIL_APP_PASSWORD` with your Gmail app password (this is crucial for the contact form to work).
    -   Optionally, set `GMAIL_USER` if it's different from the default (`ynisar514@gmail.com`).
4.  **Deploy:** Vercel will automatically detect that it's a Next.js project and deploy it.

---

*(This README was automatically generated.)*
