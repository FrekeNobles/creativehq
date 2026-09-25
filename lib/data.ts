// const img = (seed: string, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const img = (name: string) => `/images/${name}`;

export const projects = [
  {
    slug: 'local-service-business',
    title: 'Making a local service business understand — and easier to contact.',
    tags: 'Brand Refresh • Website • Mobile UX • Conversion',
    blurb: 'We restructured the digital presence from an overwhelming catalog into an obvious portfolio. Prospects now immediately understand the bespoke tier of craft, review real before-and-after transformations, and submit qualified quote requests with zero hesitation.',
    points: ['Desktop & Mobile UI Architecture', 'Conversion-Focused Quote CTA Framework', 'Before/After Clarity & Proof Engines'],
    img: img('chlothingstore.avif'),
    caseStudyImages: {
      hero: img('chlothing-store-hero.jpg'),
      secondary: [
        img('chlothing-store-1.jpg'),
        img('chlothingstore-2.png'),
    ],
  },
    client: 'Hartwell Fashion', role: 'Brand, UX, Web Build', timeline: '3 weeks',
    challenge: 'The business had years of excellent work but a website that buried it. Visitors faced a sprawling catalog with no clear path, and most quote requests arrived incomplete or unqualified.',
    approach: [
      { t: 'Clarify the offer', d: 'We audited every service and page, then reduced the catalog to three clear packages with plain-language outcomes.' },
      { t: 'Prove the craft', d: 'Before-and-after galleries and short project stories now sit next to every call to action.' },
      { t: 'Simplify contact', d: 'A guided quote form asks only what the team needs, and works one-handed on mobile.' },
    ],
    results: [{ k: '+64%', l: 'Qualified quote requests' }, { k: '-38%', l: 'Bounce rate on mobile' }, { k: '2.1x', l: 'Time spent on project pages' }],
  },
  {
    slug: 'complex-software-product',
    title: 'Making a complex software product feel simple.',
    tags: 'Positioning • UI/UX • Website • Product experience',
    blurb: 'Complex telemetry and pipeline automation tools often lose enterprise buyers within the first 30 seconds. We engineered a minimalist product dashboard and marketing narrative that makes deep analytics intuitively accessible at the boardroom level.',
    points: ['Executive Data Telemetry Visualization', 'Self-Serve Trial Onboarding Journey', 'Modular Design System & Component Kit'],
    img: img('pc-screen.avif'),
    caseStudyImages: {
      hero: img('pc-screen.avif'),
      secondary: [
        img('pc-screen-2.png'),
        img('pc-screen-1.jpg'),
      ],
  },
    client: 'Pulsegrid', role: 'Positioning, Product Design, Frontend', timeline: '14 weeks',
    challenge: 'Pulsegrid’s platform was powerful, but first-time users could not tell what it did or where to start. Demos took an hour, and trials stalled before the first insight.',
    approach: [
      { t: 'Reframe the story', d: 'We rewrote positioning around one decision the product helps leaders make, not a list of features.' },
      { t: 'Design for glanceability', d: 'A layered dashboard shows the headline first and lets teams drill into the detail on demand.' },
      { t: 'Ship a system', d: 'A modular component kit keeps product and marketing surfaces consistent as the platform grows.' },
    ],
    results: [{ k: '3x', l: 'Trial-to-demo conversion' }, { k: '-52%', l: 'Time to first insight' }, { k: '40+', l: 'Reusable components shipped' }],
  },
  {
    slug: 'advisory-digital-presence',
    title: 'Building a digital presence that communicates expertise and earns trust.',
    tags: 'Brand strategy • Identity • Website • Brand experience',
    blurb: 'For high-ticket advisory firms, credibility is non-negotiable. We stripped away corporate clichés to construct a restrained, authoritative digital identity where thought leadership publications and institutional capabilities command immediate confidence.',
    points: ['Executive Thought Leadership Framework', 'Multi-Jurisdiction Advisory Portal', 'Direct Partner Inquiry Protocol'],
    img: img('livingarea.avif'),
    caseStudyImages: {
      hero: img('livingarea.avif'),
      secondary: [
        img('office-1.png'),
        img('office-2.png'),
      ],
  },
    client: 'Marlowe & Stein Advisory', role: 'Brand Strategy, Identity, Web', timeline: '12 weeks',
    challenge: 'The firm advised on cross-border deals but looked like every other consultancy online. Partners were spending discovery calls proving credentials that the website should have established.',
    approach: [
      { t: 'Find the voice', d: 'Partner interviews shaped a calm, precise tone of voice that reads as confident rather than promotional.' },
      { t: 'Publish like an authority', d: 'A thought leadership framework turns research into a structured, searchable library.' },
      { t: 'Route the right enquiries', d: 'Jurisdiction-aware pages send each enquiry straight to the correct partner.' },
    ],
    results: [{ k: '+45%', l: 'Inbound partner enquiries' }, { k: '4', l: 'Jurisdictions on one portal' }, { k: '68%', l: 'Shorter discovery cycle' }],
  },
];

export const picture = img;
