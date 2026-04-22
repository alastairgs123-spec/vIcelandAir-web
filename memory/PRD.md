# vIcelandAir — Virtual Airline Promotional Site

## Problem Statement
User wanted a website to promote their virtual airline "vIcelandAir" — a flight-sim community modeled after real-world Icelandair, running commercial + cargo ops on MSFS and X-Plane. Pilot management is handled externally via VAMSYS (no in-app form needed).

## Architecture
- **Frontend**: React (CRA) + Tailwind CSS, single-page marketing site with section-scroll navigation
- **Backend**: FastAPI template (unchanged — no business data required for v1)
- **DB**: MongoDB (unused for v1; ready for future extensions)
- **Styling**: Outfit (display) + Manrope (body) Google Fonts, dark navy (#030C1A) with aurora-green (#00D084) + glacier-blue (#50B4D8) accents, glassmorphism cards

## User Persona
Flight-sim pilots (MSFS / X-Plane) looking to join a disciplined, atmospheric virtual airline. Existing VAMSYS users or newcomers curious about organised VA flying.

## What's Implemented (Dec 2025)
- Navbar (sticky, glass on scroll, mobile menu) → anchors to sections
- Hero — aurora background, parallax, stat badge (BIKF / Keflavík), dual CTAs
- About — asymmetric image + copy, floating "Active Pilots" badge, 3-stat grid
- Operations — Passenger vs Cargo bento cards w/ metrics
- Sim Marquee — endless scrolling MSFS/X-Plane/VATSIM/VAMSYS band
- Fleet bento grid — Boeing 757 (large), 737 MAX, 767F cards with range/config
- Destinations — Europe, North America, Cargo network chips + BIKF hub card
- Join CTA — VAMSYS external link + perks list
- Footer — mega-logo wordmark, social links, disclaimer

## External Links (no integrations needed)
- VAMSYS registration: https://vamsys.io/register
- Discord, VATSIM, IVAO, SimBrief placeholders

## Prioritized Backlog
- **P1** — News/Events blog section (CMS-style posts via MongoDB)
- **P1** — Live VAMSYS stats embed (hours flown, active flights, roster)
- **P2** — Interactive route map (react-leaflet with great-circle arcs from BIKF)
- **P2** — Pilot leaderboard (pulled from VAMSYS API if available)
- **P2** — Events calendar (shadcn calendar) with RSVP
- **P3** — Livery gallery / screenshot submissions
- **P3** — Custom domain + SEO meta tags + sitemap

## Notes
- Fleet images pulled from Pexels/Unsplash (generic commercial aircraft) — swap with real Icelandair-liveried renders when available.
- Site is currently 100% static; no auth/DB writes. Safe to deploy as-is.
