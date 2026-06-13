<p align="center">
  <img src="assets/SPLogo.png" alt="SwiftPune" width="120" height="120" />
</p>

<h1 align="center">SwiftPune</h1>

<p align="center">
  An Apple platforms community in Pune — engineers, designers, and students.<br/>
  <a href="https://swiftpune.org">swiftpune.org</a>
</p>

---

This is the source for the **SwiftPune** website — a small, fast, static site for a
volunteer-run community of people who build on Apple's platforms (iOS, macOS,
visionOS, and server-side Swift) in Pune, India.

It leads with our actual work — meetups, campus outreach, and community nights —
rather than mission statements.

## What's on the site

- **Our work** — a bento overview linking to a dedicated section for each
  initiative: meetups **S001** and **S002** (with a full recap), the **Swift
  Student Outreach** program (first session at Vishwakarma University), and the
  **WWDC26 watch party**. Each event section has an auto-advancing photo gallery.
- **Meetups** — how a typical session runs.
- **First time?** — what to expect on your first visit.
- **Core team** — the volunteers who keep it going.
- **Sponsors / hosts** — how companies can host a meetup.
- **Code of conduct** — `code-of-conduct.html`.

## Tech

No framework, no build step — just hand-written **HTML, CSS, and a little vanilla
JS**. The design language ("Studio Pune") uses the Apple system font stack, a warm
off-white palette with a single coral accent, code-comment-style eyebrows, and
the logo's bubble shape language. Motion is CSS-driven and honors
`prefers-reduced-motion`.

```
.
├── index.html              # the whole site, one page
├── code-of-conduct.html    # community code of conduct
├── css/
│   ├── reset.css
│   ├── tokens.css          # design tokens (palette, type scale, spacing, motion)
│   └── styles.css          # all component styles
├── js/
│   └── main.js             # nav, scroll-reveals, photo galleries
└── assets/
    ├── SPLogo.png          # the logo / hero mark
    ├── og-image.png        # social link-preview card (1200×630)
    ├── CoreTeam/           # core-team headshots
    └── Events/             # event photos (S001, S002, outreach, watch party)
```

## Run it locally

It's a static site, so any static server works:

```sh
python3 -m http.server 8753
# then open http://localhost:8753/
```

## Get involved

- **WhatsApp** — the fastest way to hear about the next meetup
- **LinkedIn / Instagram / X / Mastodon** — linked in the site footer
- **Pitch a talk** or **bring SwiftPune to your campus** — forms linked from the site
- **Email** — [community@swiftpune.org](mailto:community@swiftpune.org)

By taking part in the community you agree to our
[Code of Conduct](code-of-conduct.html).

## Trademarks

Apple, the Apple logo, Swift, the Swift logo, SwiftUI, iOS, iPadOS, macOS,
watchOS, visionOS, and WWDC are trademarks of Apple Inc., registered in the U.S.
and other countries. SwiftPune is an independent, community-run group and is not
affiliated with, endorsed by, or sponsored by Apple Inc.

---

<p align="center"><em>// runs on the enthusiasm of the community, good food &amp; beverages</em></p>
