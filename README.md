# TRIBE

**Find your people. Live more.** TRIBE is a mobile-first social adventure app for discovering local experiences, meeting people through shared interests, and turning an idea into a plan.

## Run locally

```sh
npm install
npm run dev
```

To create the production bundle, run `npm run build`; preview it locally with `npm run preview`.

## What works in this MVP

- Browse plans in Meru or Nairobi, search activities, places, and hosts, filter by category, and sort by group size.
- Save a plan and RSVP. These changes persist in this browser using local storage.
- Open a plan from a share link. Shared links include the plan details so the recipient can view them without an account or backend.
- Create a plan with a future date, meetup place, start time, group capacity, and optional notes.
- Export and restore a local TRIBE backup from profile settings.
- Open a sample host conversation and send local demo messages; these persist in this browser only.
- Join or leave example communities, like sample moments, see a weekend edit, and access community safety guidance.
- Install TRIBE as a PWA where the browser supports installation. Its service worker caches the app shell and provides a cached app entry when offline.
- Responsive desktop, tablet, and mobile layouts, including a mobile app navigation bar.

People, events, member counts, moments, and communities are sample content, clearly marked in the app. Shared accounts, live messaging, real maps, geolocation, moderation workflows, and a shared database are not connected. Joins, likes, RSVPs, saved plans, and messages affect only the current browser and do not notify other people. A shared invitation link contains its plan details and can be viewed by anyone who has the link. Use a public meetup place and avoid putting private details in a plan. No Supabase project is used or required.

See [product research and next-step notes](docs/PRODUCT_RESEARCH.md) for the references and decisions behind this build.

## Product principles

- Make it easy to go from inspiration to showing up.
- Put real-world participation ahead of passive scrolling.
- Make plans legible: what, when, where, who is hosting, and who is going.
- Keep safety, choice, and community care visible throughout the experience.
- Keep useful app content available when connectivity is unreliable.
