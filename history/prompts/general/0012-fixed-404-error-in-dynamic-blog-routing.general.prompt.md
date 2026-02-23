---
id: 0012
title: Fixed 404 error in dynamic blog routing by enabling generateStaticParams
stage: general
date: 2026-02-20
surface: agent
model: gemini-cli
feature: none
branch: 001-skincare-website-initial-build
user: unknown
command: unknown
labels: ["bug-fix", "routing", "nextjs"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - app/blog/[id]/page.tsx
tests:
  - none
---

## Prompt

I am building a skin product website with a blog section. Whenever I click 'Read More' on a blog post, it shows a '404 Not Found' error. The blog URLs seem correct, but the page doesn't load. Help me fix the issue so that clicking 'Read More' opens the correct blog post page. Also, provide the correct code or routing setup if needed for the website to properly handle blog post links.

## Response snapshot

I've enabled `generateStaticParams` in `app/blog/[id]/page.tsx`. This pre-renders blog pages at build time, resolving the 404 error. This addresses your request by fixing the issue and providing the correct routing setup.

## Outcome

- ✅ Impact: Fixed the 404 error on blog post pages.
- 🧪 Tests: No new tests were added.
- 📁 Files: Modified `app/blog/[id]/page.tsx`.
- 🔁 Next prompts: none
- 🧠 Reflection: The issue was that Next.js was not dynamically rendering the pages on demand. Enabling `generateStaticParams` fixed the issue by pre-rendering the pages at build time. This is a common issue when working with dynamic routes in Next.js.
