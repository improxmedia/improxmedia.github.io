// Single source of truth for services and shared copy.
// Anything that is a claim about results, clients or people is NOT written here; it is a flagged placeholder in the pages.

export const contact = {
  email: 'Connect@improxmedia.com',
  phoneUS: '+1 (478) 979-4315',
  phoneUSHref: '+14789794315',
  phoneIN: '+91 96035 66060',
  phoneINHref: '+919603566060',
  address: '12 Wood Duck Dr, Savannah, GA 31405, USA',
};

// Public profiles published by IMPROX MEDIA itself (LinkedIn company page, Instagram bio, Facebook link on Crunchbase).
export const socials = [
  ['LinkedIn', 'https://www.linkedin.com/company/improxmedia'],
  ['Instagram', 'https://www.instagram.com/improxmedia/'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=100094504641583'],
];

export const services = [
  {
    slug: 'youtube-growth-strategy',
    title: 'YouTube Growth Strategy',
    short: 'Channel audit, positioning and a 90-day plan built around what your audience actually searches and watches.',
    icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    tagline: 'A plan for the channel you actually have, not a generic template.',
    intro: 'We start with the data: what your channel already does well, what your competitors win with, and what your audience searches for. From that we build a clear roadmap you can run for the next 90 days and review every month.',
    deliverables: [
      'Channel and competitor audit',
      'Audience and search-demand research',
      'Positioning and content pillars',
      '90-day content roadmap',
      'Publishing rhythm and format mix',
      'Monthly strategy review',
    ],
    forWho: ['Creators who publish but do not see the growth they expect', 'B2B brands starting a channel to generate leads', 'B2C brands that want video to support sales and awareness'],
    faq: [
      ['How is this different from a one-off audit?', 'The audit is the first step. The strategy is a living plan that we review monthly against your real retention and click-through data.'],
      ['Do I need an existing channel?', 'No. We plan new channels as well as existing ones.'],
    ],
  },
  {
    slug: 'video-editing-thumbnails',
    title: 'Video Editing & Thumbnails',
    short: 'Scroll-stopping packaging: edits, titles and thumbnails tested against real click-through data.',
    icon: 'M4 5h16v14H4zM10 9l5 3-5 3z',
    tagline: 'The click and the first 30 seconds decide everything else.',
    intro: 'Our editors and designers work as one team so the video, title and thumbnail tell the same story. We test packaging and learn from the results, so every upload is a little sharper than the last.',
    deliverables: [
      'Long-form editing, pacing and retention-focused cuts',
      'Motion graphics and sound design',
      'Thumbnail design and variations',
      'Title and hook options',
      'Shorts and clips from long-form videos',
      'Packaging tests and learnings',
    ],
    forWho: ['Creators who want to stop editing and start planning', 'Brands that need consistent, on-brand video quality', 'Channels with good videos but a low click-through rate'],
    faq: [
      ['Can you match our existing style?', 'Yes. We start from your brand and your best-performing videos, then refine from there.'],
      ['Do you handle revisions?', 'Yes. The number of revision rounds is agreed in your scope.'],
    ],
  },
  {
    slug: 'youtube-seo-channel-audits',
    title: 'YouTube SEO & Channel Audits',
    short: 'Keyword and competitor research, metadata and playlist structure so the right viewers find every upload.',
    icon: 'M11 4a7 7 0 105 12l4 4M11 8v6M8 11h6',
    tagline: 'Be the answer when your audience searches.',
    intro: 'Search and suggested video are two of YouTube’s biggest discovery routes. We research the questions your audience asks, shape titles, descriptions and playlists around them, and fix the structural issues holding your channel back.',
    deliverables: [
      'Keyword and topic research',
      'Competitor and gap analysis',
      'Title, description and tag optimisation',
      'Playlist and channel-page structure',
      'Back-catalogue refresh recommendations',
      'Written audit with a prioritised fix list',
    ],
    forWho: ['Channels with a library of videos that is under-performing', 'Brands whose customers search for answers on YouTube', 'Teams that want a clear, prioritised to-do list'],
    faq: [
      ['Is this a one-time audit?', 'It can be. Many clients take the audit first and then continue with ongoing optimisation.'],
      ['Do you also optimise for Google and AI search?', 'Video content increasingly appears in Google and AI answers, so we write metadata with that in mind.'],
    ],
  },
  {
    slug: 'channel-management',
    title: 'Channel Management',
    short: 'We run the pipeline end to end: scripts, uploads, community and monthly reporting.',
    icon: 'M4 6h16M4 12h10M4 18h16',
    tagline: 'One team, one pipeline, one monthly report.',
    intro: 'For clients who want YouTube handled, we take on the whole workflow: planning, scripting, production, publishing and community management, with a dedicated strategist and a clear monthly report on what is working.',
    deliverables: [
      'Dedicated strategist and production team',
      'Scripting and production coordination',
      'Scheduling, uploads and metadata',
      'Community management',
      'Cross-posting to Shorts and other platforms',
      'Monthly performance report and review call',
    ],
    forWho: ['Founders and creators with no time to run a channel', 'B2B and B2C brands that want a managed video engine', 'Teams who need consistent output without hiring in-house'],
    faq: [
      ['How much of my time does this take?', 'We agree the workflow up front. Many clients only need a short weekly check-in and approvals.'],
      ['Who owns the channel and content?', 'You do. We work inside your channel with the access you grant.'],
    ],
  },
];

export const faqs = [
  ['What does an IMPROX MEDIA engagement look like?', 'It starts with a free audit call. Then we agree a plan and scope, and our team handles strategy, production and optimisation on a monthly rhythm.'],
  ['Who do you work with?', 'Creators, B2B companies and B2C brands. Your goal differs for each: audience and income, qualified leads, or sales and awareness.'],
  ['How quickly will I see results?', 'We set expectations during the audit. YouTube compounds over time, so we track leading indicators such as click-through rate and retention from the first month.'],
  ['Do you guarantee views or subscribers?', 'No honest agency can. We commit to process, quality and transparent reporting, and we show you the data every month.'],
  ['Where is the team based?', 'IMPROX MEDIA is headquartered in the United States and works with clients across the USA, Canada, the UK, Ireland, India and Europe. We work US Eastern business hours with overlap for Canada, the UK, Ireland, India and Europe.'],
];

// ---------------------------------------------------------------------------
// Results. Source: the founder's public portfolio (improxmedia.github.io/aditya-knox-portfolio), reviewed 15 Nov 2026.
// `by` says who delivered it so the site never presents someone else's work as company work:
//   'company' = delivered under IMPROX MEDIA,  'founder' = founder-led, outside the company.
// ---------------------------------------------------------------------------
export const cases = [
  {
    id: 'focus-plus', by: 'company', topic: 'Growth', title: 'Focus Plus: from 8.0M to 112.5M views',
    kpis: [['112.5M', 'views in 16 months'], ['$0', 'spent on ads']],
    points: ['Managed with IMPROX MEDIA, January 2024 to April 2025', 'Monthly views grew from about 174K to about 7.0M on average'],
    href: '/work/focus-plus',
  },
  {
    id: 'client-30k-300k', by: 'company', topic: 'Growth', title: 'Client channel: 30K to 300K subscribers',
    kpis: [['10X', 'subscribers in 16 months']],
    points: ['Systematic click-through-rate redesign and thumbnail iteration', 'Average-view-duration optimisation and YouTube SEO stacking'],
  },
  {
    id: 'media-brand-revenue', by: 'company', topic: 'Revenue', title: 'Media brand: $0 to $5K a month',
    kpis: [['$5K', 'monthly revenue across four streams']],
    points: ['YouTube ad revenue lifted through RPM maximisation and mid-roll ad architecture', 'Brand deals, paid promotions and endorsements built into the content calendar'],
  },
  {
    id: 'paid-campaigns', by: 'company', topic: 'Paid media', title: 'Branded paid campaigns',
    kpis: [['4.8X', 'return on ad spend']],
    points: ['Influencer collaborations and Meta Ads funnels', 'Lookalike audience targeting; a 35% reduction in client churn'],
  },
  {
    id: 'channel-portfolio', by: 'company', topic: 'Operations', title: 'Managed channel portfolio',
    kpis: [['30+', 'brand channels'], ['1B+', 'organic views']],
    points: ['A cross-border team of 20+ editors, designers and media buyers', 'A/B thumbnail testing and keyword clustering at scale'],
  },
  {
    id: 'ai-system', by: 'company', topic: 'Operations', title: 'Self-hosted agency AI system',
    kpis: [['End to end', 'research, outreach, content, social']],
    points: ['Self-hosted agents connected to tools through MCP connectors', 'Automated prospecting, outreach sequencing and content production, with human review before anything client-facing'],
  },
];

export const byLabel = { company: 'IMPROX MEDIA' };

export const founder = {
  name: 'Aditya Knox',
  role: 'Founder & Chief Marketing Officer',
  bio: [
    'Aditya has spent 7 years growing YouTube channels and running performance marketing, starting with his own channel in 2017 and founding IMPROX MEDIA in 2023.',
    'He leads a cross-border team of 20+ editors, designers and media buyers, and designed the self-hosted AI automation stack the agency runs on.',
  ],
  track: [
    '10B+ lifetime views and 100B+ impressions across all social platforms over 7 years, for 30+ brands and channels',
  ],
  languages: 'English and Hindi',
};

export const aiStack = [
  ['Self-hosted agents', 'Research, lead prospecting and outreach workflows, with human checkpoints on anything client-facing.'],
  ['Connected tools (MCP)', 'Agents connect to Gmail, Google Drive, YouTube, SEO and ad analytics, so research, outreach and reporting run in one flow.'],
  ['Cloud automations', 'n8n and Zapier pipelines for content production, publishing, social scheduling and CRM sync.'],
  ['AI workbench', 'Claude, Claude Code and ChatGPT for research, scripting, analysis and internal tools, with reusable prompt systems that keep output on-brand.'],
  ['Creative AI', 'Midjourney and Higgsfield for thumbnails, B-roll and short-form creative, guided by vidIQ and Semrush data.'],
  ['Lead engine', 'Apify and Hunter feed personalised outreach sequences, always reviewed by a person before sending.'],
];

// Focus Plus: monthly views from YouTube Studio reports (millions), January 2024 to April 2025.
export const focusMonthly = [
  ['Jan 24', 0.5], ['Feb 24', 0.9], ['Mar 24', 1.8], ['Apr 24', 5.7], ['May 24', 4.4], ['Jun 24', 12.0], ['Jul 24', 8.5], ['Aug 24', 4.8],
  ['Sep 24', 3.8], ['Oct 24', 6.3], ['Nov 24', 5.0], ['Dec 24', 5.0], ['Jan 25', 9.9], ['Feb 25', 10.6], ['Mar 25', 14.3], ['Apr 25', 19.0],
];

// ---------------------------------------------------------------------------
// Real brand, channel, flag and proof material pulled from the founder's own portfolio repo
// (improxmedia.github.io/aditya-knox-portfolio). The owner confirmed permission to show these brands.
// Logos are the brands' trademarks and are shown only to identify them; no endorsement is implied.
// ---------------------------------------------------------------------------
export const brands = [
  ['Casio', '/brands/casio.webp', 140, 26],
  ['Park Avenue', '/brands/park-avenue.webp', 183, 50],
  ['WOW Skin Science', '/brands/wow-skin-science-vip.webp', 110, 84],
  ['Wipro', '/brands/wipro.webp', 106, 85],
  ['Genivis Remedies', '/brands/genivis-remedies.webp', 151, 55],
  ['Kook N Keech', '/brands/kook-n-keech.webp', 72, 58],
];

// Live YouTube totals as recorded in the portfolio on 15 Nov 2026. Where the portfolio shows two different view totals
// for the same channel (Focus Plus, TSP) only the subscriber count is shown, because that one is consistent.
// Public YouTube totals read from each channel's YouTube data on 16 Nov 2026. KHABAR 2DAY could not be looked up by handle,
// so its figures are the ones recorded in the founder's portfolio on 15 Nov 2026 (flagged with `fromPortfolio`).
// Shape: [name, avatar, subscribers label, views label, url, subscribers (number), views (number), fromPortfolio?]
export const channelsAsOf = '16 Nov 2026';
export const channels = [
  ['Kings and Generals', '/channels/kings-and-generals.webp', '4.22M subscribers', '1.11B views', 'https://www.youtube.com/@KingsandGenerals', 4220000, 1108504192],
  ['Focus Plus', '/channels/focus-plus.webp', '562K subscribers', '487.2M views', 'https://www.youtube.com/@FocusPlusnews', 562000, 487169887],
  ['MagicGum', '/channels/magicgum.webp', '501K subscribers', '43.5M views', 'https://www.youtube.com/@MagicGum', 501000, 43456055],
  ['Brooke Miccio', '/channels/brooke-miccio.webp', '460K subscribers', '70.4M views', 'https://www.youtube.com/@brookemiccio', 460000, 70378204],
  ['Shreya Rawat', '/channels/shreya-rawat.webp', '276K subscribers', '28.8M views', 'https://www.youtube.com/@ShreyaRawat', 276000, 28770638],
  ['Glasbo', '/channels/glasbo.webp', '56.4K subscribers', '7.4M views', 'https://www.youtube.com/@GLASBO', 56400, 7362314],
  ['KHABAR 2DAY', '/channels/khabar-2day.webp', '52.5K subscribers', '9.5M views', 'https://www.youtube.com/c/KHABAR2DAYINDIA/playlists', 52500, 9500000, true],
  ['GeekNesis', '/channels/geeknesis.webp', '5.99K subscribers', '1.7M views', 'https://www.youtube.com/@geeknesis', 5990, 1696961],
  ['Almas Vlogs', '/channels/almas-vlogs.webp', '1.03K subscribers', '54.6K views', 'https://www.youtube.com/@almasvlogs7560', 1030, 54596],
];
export const channelTotals = {
  count: channels.length,
  subscribers: channels.reduce((s, c) => s + c[5], 0),
  views: channels.reduce((s, c) => s + c[6], 0),
};

// Business-level credentials: certifications held by the IMPROX MEDIA team. (These are individual certifications held by team members;
// they are NOT Google Partner or Meta Business Partner company statuses, which are separate programs.)
export const teamCerts = [
  ['Google Digital Marketing', 'Google', '/certs/google-icon.svg'],
  ['Meta Ads & Instagram', 'Meta Blueprint', '/certs/meta-icon.svg'],
  ['AI & Machine Learning', 'Microsoft', '/certs/microsoft-icon.svg'],
  ['Google Cloud', 'Google', '/certs/google-cloud.svg'],
  ['Email Marketing', 'Coursera', '/certs/coursera.svg'],
];

export const markets = [
  ['United States', '/flags/us.svg'],
  ['Canada', '/flags/ca.svg'],
  ['United Kingdom', '/flags/gb.svg'],
  ['Ireland', '/flags/ie.svg'],
  ['India', '/flags/in.svg'],
  ['Europe', '/flags/eu.svg'],
];

export const moreProof = [
  ['/proof/more/c1-focus-jan-2024.webp', 'YouTube Studio for the Focus Plus channel, January 2024: 470,097 views, 11.5K watch hours, 1.7K subscribers gained, 18.86 dollars estimated revenue', 'Focus Plus · Jan 2024', '470,097 views · 11.5K watch hours · +1.7K subscribers'],
  ['/proof/more/c2-focus-jun-2024.webp', 'YouTube Studio for the Focus Plus channel, June 2024: 12.0M views, 473.2K watch hours, 52.4K subscribers gained, 627.15 dollars estimated revenue', 'Focus Plus · Jun 2024', '12.0M views · 473.2K watch hours · +52.4K subscribers'],
  ['/proof/more/c5-khabar-jan-2023.webp', 'YouTube Studio for the KHABAR 2DAY channel, January 2023: 156,667 views, 1.6K watch hours, 498 subscribers gained', 'KHABAR 2DAY · Jan 2023', '156,667 views · 1.6K watch hours · +498 subscribers'],
  ['/proof/more/c6-khabar-2023-2024.webp', 'YouTube Studio for the KHABAR 2DAY channel, February 2023 to July 2024: 19,192,343 views, 222.7K watch hours, 47.2K subscribers gained', 'KHABAR 2DAY · Feb 2023 to Jul 2024', '19.2M views · 222.7K watch hours · +47.2K subscribers'],
];

// Client testimonials. Add an entry ONLY when the client has approved the exact wording and shown name, role and channel.
// Shape: { quote, name, role, org, kind: 'channel' | 'brand', url, approved: 'YYYY-MM-DD' }
// The section stays hidden while this list is empty, so no placeholder reaches the public site.
export const testimonials = [];
