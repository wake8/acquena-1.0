import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: { heading?: string; text: string }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "best-face-cleanser-for-oily-skin-india",
    title: "The Best Face Cleanser for Oily Skin in India (2025 Guide)",
    description: "If you battle midday shine or breakouts, the right cleanser can transform your skin. Here's what to look for — and what to avoid — for oily skin in India's climate.",
    date: "2025-03-12",
    readTime: "6 min read",
    category: "Oily Skin",
    image: blog1,
    content: [
      { text: "Living in India often means dealing with humidity, pollution and excess oil — a triple threat that leaves skin feeling congested by noon. The cleanser you use every morning sets the tone for everything that follows." },
      { heading: "What oily skin actually needs", text: "Contrary to popular belief, oily skin doesn't need to be stripped. Aggressive cleansers with sulfates and high alcohol content trigger your sebaceous glands to overproduce oil — the exact opposite of what you want. Look for gentle surfactants, niacinamide and hydrating humectants like glycerin." },
      { heading: "Ingredients that work", text: "Niacinamide regulates sebum, salicylic acid (in low percentages) keeps pores clear, and green tea calms inflammation. Acquena's formula combines all three at safe daily-use levels, so you get clarity without the tightness." },
      { heading: "How to wash an oily face the right way", text: "Use lukewarm — never hot — water. Massage for 30 seconds, no more. Pat dry with a clean towel and follow with a lightweight moisturiser. Even oily skin needs hydration." },
    ],
  },
  {
    slug: "hydrating-face-wash-india-dry-skin",
    title: "Hydrating Face Wash for Dry Skin: A Complete Guide",
    description: "Dry skin is more than a winter problem. Here's how to choose a hydrating face wash that supports your moisture barrier all year long.",
    date: "2025-02-28",
    readTime: "5 min read",
    category: "Dry Skin",
    image: blog2,
    content: [
      { text: "If your face feels tight after washing, your cleanser is the culprit. A truly hydrating face wash leaves skin soft, supple and never squeaky." },
      { heading: "Why hydration starts at the cleanse", text: "Your skin barrier is a delicate film of lipids and water. Stripping it once is uncomfortable — stripping it twice a day, every day, leads to flakiness, sensitivity and premature ageing." },
      { heading: "Hero ingredients for dry skin", text: "Hyaluronic acid pulls moisture into the skin, glycerin holds it there, and ceramides patch up the barrier. Acquena uses all three in a sulfate-free base." },
      { heading: "Routine tips", text: "Cleanse only once a day if your skin runs very dry — a simple water rinse in the morning is often enough. Always apply moisturiser to damp skin." },
    ],
  },
  {
    slug: "acquena-face-cleanser-review",
    title: "Acquena Face Cleanser Review: An Honest 30-Day Test",
    description: "We tested Acquena's gentle daily cleanser on combination, oily and dry skin types for 30 days. Here's what we found.",
    date: "2025-02-10",
    readTime: "7 min read",
    category: "Reviews",
    image: blog3,
    content: [
      { text: "There are hundreds of face washes on Amazon India. We wanted to know if Acquena lives up to its 'gentle, balanced, effective' promise — so we put it to a 30-day test." },
      { heading: "First impressions", text: "The frosted glass bottle feels premium, the pump dispenses just the right amount, and the gel-cream texture lathers softly without foaming aggressively. The scent is barely-there — clean, fresh, no perfume overload." },
      { heading: "Week 1: balance", text: "Within a few days, midday shine reduced noticeably on combination skin. No tight feeling after rinsing — a clear sign the formula respects the moisture barrier." },
      { heading: "Week 4: clarity", text: "Pores looked visibly smaller around the nose and chin. Texture was smoother, makeup applied more evenly, and there were no new breakouts during the test window." },
      { heading: "Verdict", text: "Acquena is one of the few cleansers we'd recommend across skin types in India. It's gentle enough for daily use, effective enough to make a real difference, and affordable enough to repurchase." },
    ],
  },
  {
    slug: "ingredients-to-avoid-in-face-wash",
    title: "5 Ingredients to Avoid in Your Face Wash",
    description: "Not all face washes are created equal. Here are the five ingredients we recommend skipping — and what to look for instead.",
    date: "2025-01-22",
    readTime: "4 min read",
    category: "Ingredients",
    image: blog4,
    content: [
      { text: "Reading a skincare label can feel like decoding a chemistry exam. These five common ingredients are worth flagging the next time you shop." },
      { heading: "1. Sulfates (SLS / SLES)", text: "These create that satisfying lather — but they're the main reason your skin feels tight after washing. They strip natural oils and disrupt the barrier." },
      { heading: "2. Synthetic fragrance", text: "Listed simply as 'fragrance' or 'parfum', this can hide dozens of irritants. If you have sensitive skin, stick to fragrance-free formulas." },
      { heading: "3. Harsh alcohols", text: "Denatured alcohol high up the ingredient list dehydrates and inflames. Fatty alcohols (cetyl, stearyl) are different — they're moisturising." },
      { heading: "4. Microbeads & harsh scrubs", text: "Daily physical exfoliation creates micro-tears in the skin. Choose gentle chemical exfoliants instead." },
      { heading: "5. Essential oils in high concentration", text: "Lemon, peppermint and eucalyptus oils smell wonderful but can sensitise skin over time. A little is fine; a lot is not." },
    ],
  },
  {
    slug: "morning-skincare-routine-men-india",
    title: "A Simple Morning Skincare Routine for Men in India",
    description: "Three steps. Five minutes. Real results. Here's a no-fuss morning skincare routine built for the Indian climate.",
    date: "2024-12-30",
    readTime: "5 min read",
    category: "Routines",
    image: blog5,
    content: [
      { text: "You don't need a 10-step routine to have great skin. A focused three-step morning ritual is more than enough — and it takes less time than brushing your teeth properly." },
      { heading: "Step 1: Cleanse", text: "Start with a gentle, sulfate-free cleanser like Acquena. Massage onto damp skin for 30 seconds, rinse with lukewarm water, pat dry." },
      { heading: "Step 2: Moisturise", text: "Even oily skin needs hydration. A lightweight gel moisturiser keeps skin balanced and prevents the rebound oil production that comes from dryness." },
      { heading: "Step 3: SPF", text: "This is the single most important anti-ageing step you can take. Use a broad-spectrum SPF 30 or higher every morning — yes, even when it's cloudy, even when you're indoors near windows." },
      { heading: "That's it", text: "Three products, five minutes, every day. Consistency beats complexity — always." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
