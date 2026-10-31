# TRIBE release and manual QA checklist

Run this checklist before inviting pilot users. The current build is a local-first prototype: plans, profile preferences, RSVPs, community choices, likes, and demo messages stay in the browser. Do not describe sample records as real people or live events.

## Build and install
- [ ] GitHub Actions completes the TypeScript check and Vite production build.
- [ ] Serve the production build over HTTPS and confirm the manifest loads without errors.
- [ ] Confirm 192px and 512px icons, app name, theme color, and standalone launch on Android Chrome and desktop Chromium.
- [ ] Confirm iOS users can find Add to Home Screen instructions.
- [ ] Install, close, and reopen the app; verify the app shell launches.
- [ ] Load once online, switch offline, and verify the cached shell opens. Clearly expect remote Unsplash imagery and Google Fonts to be unavailable offline.

## Core journeys
- [ ] Switch between Meru and Nairobi; location-specific plans and community examples update.
- [ ] Search by plan title, place, category, and host; clear the query and confirm results recover.
- [ ] Filter beginner-friendly, weekend, and free plans; clear filters.
- [ ] Save a plan, RSVP, refresh, and verify state persists in that browser.
- [ ] Create a future-dated plan, refresh, open its details, and share its link to a fresh browser profile.
- [ ] Confirm a recipient can open a shared plan without having it in local storage, and that the link visibly carries plan details.
- [ ] Export a backup, change local state, restore the backup, and verify the state returns.
- [ ] Clear local TRIBE data, cancel the confirmation once, then confirm the reset path restores sample preview data and removes saved user changes.
- [ ] Send a demo message and verify the UI continues to label it as local-only and not delivered.
- [ ] Test at 320px, 360px, tablet width, and a wide desktop. Check for horizontal overflow and obscured mobile navigation.
- [ ] Check keyboard focus, Escape-to-close behavior, form validation, and accessible names for icon-only buttons.

## Pilot safety and release gates
- [ ] Keep all meetup locations public and avoid sharing private contact details in shareable plan descriptions.
- [ ] Add working report/block flows and a moderation owner before real user-generated content is enabled.
- [ ] Do not claim shared accounts, real-time messaging, attendance verification, live distance, maps, or cross-device sync until each is implemented and tested.
- [ ] Before adding a backend, decide data retention, account deletion, consent, access controls, backups, and migration from local browser storage.
