# TRIBE: product research notes

Research checked on 31 October 2026. The product references below informed interaction choices; TRIBE's branding, copy, layout, and code are original.

## Pilot geography

Meru is the default pilot location, with Nairobi available as a second sample city. MUST identifies its main campus as Nchiru, about 15 km from Meru Town on the Meru–Maua Road. This informed the campus and town references; all TRIBE schedules, hosts, attendee counts, and distances remain illustrative rather than real listings.

- [Meru University of Science and Technology: location](https://www.must.ac.ke/location/)
- [National Museums of Kenya: Meru Museum](https://nmk.go.ke/meru-museum/)

## Product patterns worth adapting

- **AllTrails — practical community knowledge.** Reviews include current trail conditions, not just a star score. TRIBE's plan detail view therefore makes the host, meetup time and place, availability, beginner cues, and a brief safety note visible before someone joins. A future shared version should let attendees add a post-adventure condition or access note, with a clear timestamp and source.
  - [How to write a trail review](https://support.alltrails.com/en-gb/articles/360018930652-How-to-write-a-review-for-a-trail)
  - [Trail conditions](https://support.alltrails.com/hc/en-gb/articles/36933535617300-Trail-Conditions)
- **komoot — a route can become a social invitation.** Community route collections help people move from inspiration to a plan; the current product also describes publishing a planned route as a discoverable event. TRIBE gives each plan a detail view with a direct RSVP and share action, and keeps saved plans nearby.
  - [Plan, navigate and share](https://www.komoot.com/features)
  - [2026 feature releases](https://support.komoot.com/hc/en-us/articles/10621431252250-All-komoot-Feature-Releases-2026)
- **Figma / National Park Service — visual and list-led discovery.** The design case study discusses that some visitors orient visually while others prefer words and lists. TRIBE's editorial photo moments provide inspiration, while searchable plan cards keep the practical list usable and scannable. A real map should be an optional companion view, not the sole way to discover an activity.
  - [Made in Figma: the National Park Service goes from paper to pixels](https://www.figma.com/blog/made-in-figma-the-national-park-service-goes-from-paper-to-pixels/)
- **Public GitHub concept — complete social touchpoints.** [Hiking-Social-Media-App](https://github.com/ibs12/Hiking-Social-Media-App) documents gallery, post creation, profile, and direct/group messaging screens in its project README. TRIBE borrows the product lesson that adventure needs social follow-through after discovery: the current local prototype now includes plan messaging and a message composer, alongside creation and RSVPs. It does not reuse that project's source code.

## PWA decisions

- The manifest includes app identity, standalone display, 192px and 512px icons, a maskable icon, and wide and narrow screenshots to support richer install surfaces where the browser offers them.
- A service worker caches the app shell and same-origin resources for returning offline visits. Unsplash photos and Google Fonts are external and need a network connection; do not imply that maps or remote media are available offline.
- Install UI follows the browser's own install affordance and provides a short device-specific fallback when no prompt event is available.
  - The app entry remains a real deep link: shared plans open directly, including on a browser without that plan in local storage.
  - The service worker shell cache is versioned so a new app release replaces the prior shell cleanly.
  - Local backup is explicit and portable: users can export or restore their saved state without an account.
  - [MDN PWA best practices](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Best_practices) calls for responsive layouts, offline behavior, deep links, speed, and accessibility across input types. TRIBE's local records and cached app shell work offline; external photos and fonts still require a connection.
  - [Chrome installable manifest criteria](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/)
  - [web.dev PWA guide](https://web.dev/learn/pwa/)

## Deliberate prototype limits

Event, host, member, and community records are sample data. RSVPs, saves, and the outgoing demo conversation are stored only in the current browser's local storage. They do not create real accounts, send messages to another person, verify attendance, or synchronize between devices. Shared plan URLs carry the event details in the URL so recipients can open them without an account; anyone with the URL can see those details. The displayed distances are sample copy, not live GPS or route guidance. Users should use public meetup points and keep private information out of shareable plans.

## Highest-value next increments

1. Add community follow and post-activity field notes, with report and block controls before inviting real people.
3. Add an opt-in, privacy-conscious map/list toggle once a map data source, attribution, and location policy are selected.
4. Add multi-device sync only after users can choose an appropriate backend and understand where plan and profile data is stored; retain export and migration support.
5. Validate the complete create → discover → detail → RSVP → message → attend → field-note loop with real students before adding broad feature scope.
