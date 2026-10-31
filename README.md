# TRIBE

**Find your people. Live more.** TRIBE is a mobile-first social adventure app for discovering local experiences, meeting people through shared interests, and turning an idea into a plan.

## Run locally

```sh
npm install
npm run dev
```

To create the production bundle, run `npm run build`; preview it locally with `npm run preview`.

## What works in this MVP

- Browse local plans, search by activity or place, filter by category, and sort by availability.
- Save a plan and RSVP. These demo changes persist in this browser using local storage.
- Open plan details, share an invitation, and see meetup, host, capacity, and safety notes.
- Create and publish a plan from the in-app form.
- Open a sample host conversation and send local demo messages; these persist in this browser only.
- Join or leave example communities, like sample moments, see a weekend edit, and access community safety guidance.
- Install TRIBE as a PWA where the browser supports installation. Its service worker caches the app shell and provides a cached app entry when offline.
- Responsive desktop, tablet, and mobile layouts, including a mobile app navigation bar.

The people, events, and communities in this first build are illustrative sample content. Shared accounts, live messaging, real maps, geolocation, moderation workflows, and a shared database are not connected yet. Joins, likes, RSVPs, saved plans, and outgoing demo messages affect only the current browser. No Supabase project is required to run the local MVP.

See [product research and next-step notes](docs/PRODUCT_RESEARCH.md) for the references and decisions behind this build.

## Product principles

- Make it easy to go from inspiration to showing up.
- Put real-world participation ahead of passive scrolling.
- Make plans legible: what, when, where, who is hosting, and who is going.
- Keep safety, choice, and community care visible throughout the experience.
- Keep useful app content available when connectivity is unreliable.
