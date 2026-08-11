export const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Businesses', href: '#for-businesses' },
  { label: 'About', href: '#about' },
];

export const statsBar = [
  { value: '10K+', label: 'Items reported' },
  { value: '73%', label: 'Match rate' },
  { value: '120+', label: 'Partner venues' },
  { value: '48h', label: 'Avg. reconnect time' },
];

export const howItWorksSteps = [
  {
    number: '01',
    icon: 'ClipboardEdit',
    title: 'Report',
    description:
      'Tell us what you lost or found, where it happened, and when. Add a photo to speed up matching.',
  },
  {
    number: '02',
    icon: 'Search',
    title: 'Match',
    description:
      'Our smart matching engine compares descriptions, location, and time to surface the most likely candidates.',
  },
  {
    number: '03',
    icon: 'MessageCircle',
    title: 'Connect',
    description:
      'Reach out directly and securely to the person or business that may have your item — no personal data exposed.',
  },
];

export const businessTypes = [
  { icon: 'Hotel', label: 'Hotels & Resorts' },
  { icon: 'Plane', label: 'Airports & Transit' },
  { icon: 'GraduationCap', label: 'Universities' },
  { icon: 'UtensilsCrossed', label: 'Restaurants & Cafés' },
  { icon: 'Building2', label: 'Offices & Co-working' },
  { icon: 'ShoppingBag', label: 'Retail & Events' },
];

export const trustItems = [
  {
    icon: 'Shield',
    label: 'Privacy protected',
    description:
      'Personal contact details are never shared. All communication flows through our secure messaging layer.',
  },
  {
    icon: 'CheckCircle2',
    label: 'Verified matches',
    description:
      'Our matching algorithm cross-references item details, location, and time to reduce false positives.',
  },
  {
    icon: 'MapPin',
    label: 'Location-based',
    description:
      'Reports are pinned to real places — venues, transit stops, neighbourhoods — so matches stay accurate.',
  },
  {
    icon: 'Users',
    label: 'Direct connection',
    description:
      'Once a match is confirmed, both parties can connect instantly without third-party mediation.',
  },
];

export const dashboardStats = [
  { icon: 'Package', label: 'Found Items' },
  { icon: 'Link2', label: 'Potential Matches' },
  { icon: 'Bell', label: 'Active Reports' },
  { icon: 'Clock', label: 'Recent Items' },
];

export const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'For Businesses', href: '#for-businesses' },
      { label: 'About', href: '#about' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
];

/* ── Search demo items ── */
export const searchItems = [
  { id: 1, type: 'found', name: 'Blue Leather Wallet', category: 'Accessories', description: 'Found near Gate 3, contains cards but no cash. Navy blue, bifold.', location: 'HSIA Terminal 1', time: '2 hours ago' },
  { id: 2, type: 'lost', name: 'iPhone 15 Pro (Black)', category: 'Electronics', description: 'Lost after checking in. Has a clear case with a sticker on the back.', location: 'Radisson Blu, Dhaka', time: '5 hours ago' },
  { id: 3, type: 'found', name: 'MacBook Air (Silver)', category: 'Electronics', description: 'Left in the business lounge. Has a blue vinyl sticker on the lid.', location: 'NSU Campus, Bashundhara', time: '1 day ago' },
  { id: 4, type: 'lost', name: 'Brown Passport Holder', category: 'Documents', description: 'Contains a passport and two credit cards. Brown faux leather.', location: 'Uttara Metro Station', time: '3 hours ago' },
  { id: 5, type: 'found', name: 'AirPods Pro (2nd Gen)', category: 'Electronics', description: 'Found in a white charging case near the food court.', location: 'Jamuna Future Park', time: '6 hours ago' },
  { id: 6, type: 'lost', name: 'Black Laptop Backpack', category: 'Bags', description: '15" laptop bag, Samsonite brand. Has a red keychain on the zipper.', location: 'Pan Pacific Hotel', time: '1 day ago' },
  { id: 7, type: 'found', name: 'Reading Glasses', category: 'Accessories', description: 'Black rectangular frames in a grey hard case. Left at a corner table.', location: 'Daily Grind Café, Gulshan', time: '4 hours ago' },
  { id: 8, type: 'lost', name: 'Toyota Car Keys', category: 'Accessories', description: 'Toyota smart key with a small panda plush keyring.', location: 'Bashundhara City Mall', time: '2 days ago' },
  { id: 9, type: 'found', name: 'Student ID Card', category: 'Documents', description: 'BRAC University student ID. Name: Sadia R.', location: 'BRAC University Campus', time: '8 hours ago' },
];

/* ── FAQ items ── */
export const faqItems = [
  {
    question: 'Is Left Something Behind free to use?',
    answer: 'For individuals reporting lost or found items, the platform will always be free. We plan to offer a premium tier for businesses and organisations who want advanced features like dashboards and bulk management.',
  },
  {
    question: 'How does matching work?',
    answer: 'Our matching engine compares item descriptions, categories, reported locations, and timestamps across all active reports. When potential matches are found, both parties are notified and can connect securely through our messaging layer.',
  },
  {
    question: 'Will my personal details be shared?',
    answer: 'Never. Your contact details are never visible to other users. All communication happens through our platform. You only share what you choose to share once you have confirmed a match.',
  },
  {
    question: 'What kinds of items can I report?',
    answer: 'Anything — electronics, bags, documents, jewellery, clothing, keys, pets, you name it. The platform is category-agnostic. If it was lost or found, you can report it.',
  },
  {
    question: 'When will the app launch?',
    answer: 'We are targeting a launch in late 2026. Join the early access list to be among the first users and help shape the product with your feedback.',
  },
  {
    question: 'Can businesses integrate this with their existing systems?',
    answer: 'Yes — we are building an API and a dedicated business dashboard that venues can embed into their own lost-and-found workflow. Register your interest on the site and we will be in touch.',
  },
];

/* ── Testimonials ── */
export const testimonials = [
  {
    name: 'Farhan Ahmed',
    role: 'Frequent traveller, Dhaka',
    quote: 'I left my passport holder at the airport and honestly thought it was gone forever. This platform connected me with the airline lounge staff within an hour. Incredible.',
    avatarColor: 'var(--color-primary)',
  },
  {
    name: 'Nadia Islam',
    role: 'Student, NSU',
    quote: 'My MacBook was reported found on campus before I even realised it was missing. The notification came through so fast. I was in tears.',
    avatarColor: 'var(--color-success)',
  },
  {
    name: 'Rafiq Hossain',
    role: 'Hotel Manager, Sylhet',
    quote: 'As a hotel we deal with lost items every week. Left Something Behind gives us a proper system instead of a cardboard box in the back office. Game changer.',
    avatarColor: 'var(--color-accent-blue)',
  },
  {
    name: 'Tasneem Chowdhury',
    role: 'Entrepreneur, Chittagong',
    quote: "The matching process is surprisingly accurate. It surfaced my lost bag report against a found report from a café I had completely forgotten visiting. Love it.",
    avatarColor: 'var(--color-warning)',
  },
];
