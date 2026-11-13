// Casuals — every monthly brunch, newest first, plus the annual WWDC
// watch party.
//
// TO ADD A CASUAL (C003, C004, …): drop its photos in
// assets/Events/Casuals/00N/ as 01/02/03, then add an entry to the TOP of
// `events`. The first entry is featured on /casuals; the rest become
// expanded rows in the casuals log. The homepage card follows.
//
// TO ADD A WATCH PARTY: add an entry to the TOP of `annual`. With two or
// more, the older ones get a log of their own under the featured one.
import { photos } from "../_lib/photos.js";
import site from "./site.js";

const C003 = photos("assets/Events/Casuals/003", "jpg");
const C002 = photos("assets/Events/Casuals/002", "jpg");
const C001 = photos("assets/Events/Casuals/001", "jpg");
const WWDC26 = photos("assets/Events/watchparty/wwdc26", "jpg");

export default {
  latestLabel: "latest casual",
  logLabel: "casuals.log",

  card: {
    tag: "Casuals",
    tagClass: "casual",
    media: "violet",
    title: "Brunch, once a month.",
    desc: "No talks, no agenda. A long table at a Pune restaurant, plus the WWDC keynote on a big screen every June.",
    unit: ["casual", "casuals"],
    cta: "Every casual",
    image: C003(1, "SwiftPune students around a long brunch table at Chirp, Pune"),
  },

  events: [
    {
      key: "C003",
      name: "Chirp & TOIT, Pune",
      date: "2026-10-24",
      title: 'Brunch for students, <span class="ink">dinner</span> for professionals.',
      lead: `Two tables on one Saturday. Students took over a long
        brunch table at Chirp, then the working crowd met for dinner
        at TOIT, and both ran long on side projects, first jobs and
        what everyone is shipping next.`,
      summary: `Two tables on one Saturday: a students' brunch at
        Chirp, then dinner for professionals at TOIT.`,
      facts: [
        ["Students' brunch", "Chirp — Eat. Play. Work., Pune"],
        ["Professionals' dinner", "TOIT, Pune"],
        ["When", "Saturday, October 24, 2026"],
      ],
      note: { href: site.whatsapp, label: "Hear about the next one on WhatsApp" },
      photos: {
        label: "C003 photos",
        items: [
          C003(1, "SwiftPune students around a long brunch table at Chirp, Pune"),
          C003(2, "A group selfie down the brunch table at Chirp"),
          C003(3, "The students' brunch table under the canopy at Chirp", { width: 960, variants: [640] }),
          C003(4, "SwiftPune professionals at a long dinner table at TOIT, Pune"),
          C003(5, "A group selfie over dinner at TOIT"),
          C003(6, "The professionals' dinner table at TOIT"),
        ],
      },
    },

    {
      key: "C002",
      name: "Babylon Craft Brewery, Pune",
      date: "2026-09-27",
      title: 'Sunday brunch at <span class="ink">Babylon</span>.',
      lead: `A long table at Babylon Craft Brewery, plates passed down
        the middle, and conversations about side projects, day
        jobs and everything in between.`,
      facts: [
        ["Where", "Babylon Craft Brewery, Pune"],
        ["When", "Sunday, September 27, 2026"],
      ],
      note: { href: site.whatsapp, label: "Hear about the next one on WhatsApp" },
      photos: {
        label: "C002 photos",
        items: [
          C002(1, "The SwiftPune casual group in the courtyard at Babylon Craft Brewery"),
          C002(2, "A long table of plates and conversation at Babylon Craft Brewery"),
          C002(3, "A group selfie inside Babylon Craft Brewery"),
        ],
      },
    },

    {
      key: "C001",
      name: "Chirp — Eat. Play. Work., Pune",
      date: "2026-08-22",
      summary: `The first casual. A Saturday table at Chirp, and a
        chance to meet the people from the meetups without
        a stage between us.`,
      facts: [
        ["Where", "Chirp — Eat. Play. Work., Pune"],
        ["When", "Saturday, August 22, 2026"],
      ],
      photos: {
        label: "C001 photos",
        items: [C001(1, "SwiftPune's first casual, around a table at Chirp in Pune", { width: 960, variants: [640] })],
      },
    },
  ],

  annual: {
    latestLabel: "latest night",
    logLabel: "watch_parties.log",
    events: [
      {
        key: "WWDC26",
        name: "The Daily All Day, Pune",
        date: "2026-06",
        title: 'The community\'s first proper <span class="ink">party</span>.',
        lead: `For WWDC26 we took over The Daily All Day in Pune, put the
          keynote on the big screen, and spent the evening reacting to
          every announcement in a room full of people who care as much
          as you do.`,
        facts: [
          ["Where", "The Daily All Day, Pune"],
          ["When", "Keynote night, June 2026"],
          ["The vibe", "Keynote on the big screen, the whole community around it"],
        ],
        note: { href: site.whatsapp, label: "Catch the next one on WhatsApp" },
        photos: {
          label: "WWDC26 watch party photos",
          items: [1, 2, 3].map((n) => WWDC26(n, `SwiftPune WWDC26 watch party at The Daily All Day — photo ${n}`)),
        },
      },
    ],
  },
};
