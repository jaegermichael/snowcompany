// All business content lives here. Every value below is carried over from the
// previous live site (snowcompany.co.zw, commit eb6a911). Nothing is invented:
// no prices, no testimonials, no machine specs beyond what the client published.

export const business = {
  name: 'Frozen Solutions',
  fullName: 'Frozen Solutions Zimbabwe',
  phoneDisplay: '+263 77 614 6858',
  phoneHref: 'tel:+263776146858',
  whatsapp: '263776146858',
  // NOTE: email domain differs from the site domain (snowcompany.co.zw). Confirm with the client.
  email: 'info@frozensolutions.co.zw',
  location: 'Harare, Zimbabwe',
  coverage: 'Nationwide delivery available',
  hours: [
    { days: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
    { days: 'Sat', time: '8:00 AM – 1:00 PM' },
  ],
} as const;

export type Capacity = 60 | 80 | 100 | 120;

export interface IceMachine {
  capacity: Capacity;
  image: string;
  idealFor: string;
  features: [string, string, string];
  quoteLabel: string;
}

export const iceMachines: IceMachine[] = [
  {
    capacity: 60,
    image: '/images/ice-machine-60kg.jpeg',
    idealFor: 'Ideal for cafes, small restaurants & kiosks',
    features: ['Compact & space-saving design', 'Energy efficient operation', 'Easy to clean and maintain'],
    quoteLabel: '60kg Ice Machine',
  },
  {
    capacity: 80,
    image: '/images/ice-machine-80kg.jpeg',
    idealFor: 'Perfect for restaurants & small hotels',
    features: ['Reliable consistent output', 'Quiet operation', 'Stainless steel body'],
    quoteLabel: '80kg Ice Machine',
  },
  {
    capacity: 100,
    image: '/images/ice-machine-100kg.jpeg',
    idealFor: 'Great for hotels, bars & supermarkets',
    features: ['High efficiency cooling', 'Auto-clean function', 'Large storage bin capacity'],
    quoteLabel: '100kg Ice Machine',
  },
  {
    capacity: 120,
    image: '/images/ice-machine-120kg.jpeg',
    idealFor: 'Built for medium to large businesses',
    features: ['Higher volume output', 'Commercial grade compressor', '24/7 operation ready'],
    quoteLabel: '120kg Ice Machine',
  },
];

export interface IceCreamMachine {
  name: string;
  description: string;
  tags: string[];
  badge?: 'Popular' | 'Premium';
  quoteLabel: string;
}

export const iceCreamMachines: IceCreamMachine[] = [
  {
    name: 'Soft Serve Ice Cream Machines',
    description: 'Continuous production for shops, cafes & kiosks. Single or dual flavor.',
    tags: ['Cafes', 'Ice Cream Shops', 'Kiosks'],
    badge: 'Popular',
    quoteLabel: 'Soft Serve Ice Cream Machine',
  },
  {
    name: 'Hard Ice Cream Production',
    description: 'Batch freezers for premium hard scoop ice cream brands and dessert shops.',
    tags: ['Ice Cream Brands', 'Dessert Shops'],
    quoteLabel: 'Hard Ice Cream Production Machine',
  },
  {
    name: 'Countertop Ice Cream Makers',
    description: 'Compact commercial units for restaurants and cafes with limited space.',
    tags: ['Restaurants', 'Cafes', 'Hotels'],
    quoteLabel: 'Countertop Ice Cream Maker',
  },
  {
    name: 'Commercial Gelato Machines',
    description: 'Authentic gelato production for specialty shops and premium hotels.',
    tags: ['Gelato Shops', 'Hotels'],
    badge: 'Premium',
    quoteLabel: 'Commercial Gelato Machine',
  },
  {
    name: 'Multi-Flavor Machines',
    description: '2–4 flavor dispensers for busy shops and entertainment venues.',
    tags: ['Ice Cream Shops', 'Events'],
    quoteLabel: 'Multi-Flavor Ice Cream Machine',
  },
];

// Capacity guidance comes from the site's own FAQ and product descriptions:
// cafes/small restaurants/kiosks 60kg; restaurants & small hotels 80kg;
// hotels, bars & supermarkets 80–100kg; larger operations 120kg or more.
export interface BusinessProfile {
  id: string;
  label: string;
  capacity: Capacity | null;
  reason: string;
}

export const businessProfiles: BusinessProfile[] = [
  { id: 'kiosk', label: 'Kiosk', capacity: 60, reason: 'A compact 60kg machine is the usual starting point for kiosks: small footprint, easy to keep clean.' },
  { id: 'cafe', label: 'Cafe', capacity: 60, reason: 'Cafes typically need around 60kg a day. It fits behind the counter and runs efficiently.' },
  { id: 'restaurant', label: 'Restaurant', capacity: 80, reason: 'Restaurants with a steady dinner service usually move up to 80kg for consistent output.' },
  { id: 'small-hotel', label: 'Small hotel / lodge', capacity: 80, reason: 'Small hotels and lodges are well served by 80kg: quiet operation and a stainless steel body.' },
  { id: 'bar', label: 'Bar / nightclub', capacity: 100, reason: 'Bars go through ice fast. 100kg gives you a large storage bin for peak hours.' },
  { id: 'hotel', label: 'Hotel', capacity: 100, reason: 'Hotels typically need 80–100kg a day. 100kg covers bars, rooms and functions.' },
  { id: 'supermarket', label: 'Supermarket', capacity: 100, reason: 'Supermarkets selling bagged ice usually start at 100kg with high-efficiency cooling.' },
  { id: 'large', label: 'Larger operation', capacity: 120, reason: 'Medium to large operations need 120kg or more, with a commercial grade compressor.' },
  { id: 'startup', label: 'Ice-selling startup', capacity: null, reason: 'It depends on your market and location. We help with capacity planning before you buy, so talk to us first.' },
];

export const industries = [
  'Restaurants',
  'Hotels & Lodges',
  'Cafes',
  'Ice Cream Shops',
  'Supermarkets',
  'Bars & Nightclubs',
  'Event Companies',
  'Entrepreneurs',
];

export const services = [
  { title: 'Premium Quality', text: 'Commercial equipment chosen for reliability and profitability.' },
  { title: 'Energy Efficient', text: 'Machines that keep operating costs in check.' },
  { title: 'Installation', text: 'Site assessment, setup and testing by our team.' },
  { title: 'Nationwide Delivery', text: 'Delivered from Harare to anywhere in Zimbabwe.' },
  { title: 'Maintenance', text: 'Ongoing technical support after the machine is running.' },
  { title: 'Warranty Protection', text: 'Ask us about the warranty on the machine you choose.' },
  { title: 'Spare Parts', text: 'Genuine spare parts kept in stock for the machines we supply.' },
  { title: 'Competitive Pricing', text: 'Quotes matched to the capacity you actually need.' },
] as const;

export const steps = [
  { title: 'Tell us your needs', text: 'Share your business type, capacity requirements and location with our team.' },
  { title: 'Get your quote & equipment', text: 'We recommend the right machine, deliver nationwide and handle professional installation.' },
  { title: 'Start producing', text: 'Your team is trained, equipment is running, and we stay on call for support.' },
];

export const faqs = [
  { q: 'Which ice machine is right for my business?', a: 'Cafes and small restaurants typically need 60kg/day, hotels and bars 80–100kg, while larger operations may need 120kg or more. Contact us for a free assessment.' },
  { q: 'Do you provide installation?', a: 'Yes. We provide professional installation nationwide, including site assessment, setup, testing, and operator training.' },
  { q: 'Are spare parts available?', a: 'Absolutely. We maintain stock of genuine spare parts for all machines we supply, ensuring quick turnaround on repairs.' },
  { q: 'Which ice cream machine should I choose?', a: 'Soft serve for high-volume walk-in traffic, hard ice cream batch freezers for scoop shops, countertop for restaurants, and gelato for premium specialty products.' },
  { q: 'Can you help me start an ice production business?', a: 'Yes. We assist with equipment selection, capacity planning, installation, training, and ongoing support so you can start producing and selling ice profitably.' },
];

export const businessTypes = [
  'Restaurant',
  'Hotel / Lodge',
  'Cafe',
  'Ice Cream Shop',
  'Supermarket',
  'Bar / Nightclub',
  'Event Company',
  'Food Processing',
  'Entrepreneur / Startup',
  'Other',
];

export const startupInterests = [
  'Start Ice Selling Business',
  'Start Ice Cream Shop',
  'Expand Existing Business',
  'Need Equipment Advice',
];

export const productOptions = {
  'Ice machines': iceMachines.map((m) => m.quoteLabel),
  'Ice cream machines': iceCreamMachines.map((m) => m.quoteLabel),
  Other: ['Business Startup Advice', 'Maintenance / Support', 'Not sure – need advice'],
};
