import type { ImageKey } from "./images"

export const nav = [
  { label: "Explore Experiences", href: "#experiences" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Story", href: "#our-story" },
  { label: "FAQ", href: "#faq" },
]

export type Experience = {
  id: string
  index: string
  title: string
  description: string
  cta: string
  accent: "rose" | "sage" | "mauve" | "taupe"
  size: "tall" | "wide" | "square"
  image: ImageKey
}

export const experiences: Experience[] = [
  {
    id: "birthday",
    index: "01",
    title: "Birthday Surprises",
    description: "Playful, joyful, colorful, and full of delightful reveals.",
    cta: "Explore Birthday Themes",
    accent: "rose",
    size: "wide",
    image: "experienceBirthday",
  },
  {
    id: "anniversaries",
    index: "02",
    title: "Love & Anniversaries",
    description: "Romantic timelines, favorite photographs, heartfelt messages, and meaningful dates.",
    cta: "Explore Anniversary Themes",
    accent: "mauve",
    size: "tall",
    image: "experienceAnniversary",
  },
  {
    id: "our-story",
    index: "03",
    title: "Our Story",
    description: "A narrative experience that follows the journey of two people, from the beginning to the present.",
    cta: "Explore Our Story Themes",
    accent: "taupe",
    size: "square",
    image: "experienceOurStory",
  },
  {
    id: "friendship",
    index: "04",
    title: "Friendship & Memories",
    description: "A nostalgic, expressive collection of shared moments, inside jokes, and personal messages.",
    cta: "Explore Friendship Themes",
    accent: "sage",
    size: "square",
    image: "experienceFriendship",
  },
  {
    id: "milestones",
    index: "05",
    title: "Milestones & Achievements",
    description: "A thoughtful way to celebrate graduations, accomplishments, new beginnings, and personal growth.",
    cta: "Explore Milestone Themes",
    accent: "taupe",
    size: "tall",
    image: "experienceMilestones",
  },
  {
    id: "wedding",
    index: "06",
    title: "Wedding & Invitations",
    description: "Elegant digital invitations, event information, photographs, and personal touches.",
    cta: "Explore Wedding Themes",
    accent: "rose",
    size: "wide",
    image: "experienceWedding",
  },
]

export type ThemeAccent = "rose" | "sage" | "mauve" | "taupe"

export type ThemeSample = {
  id: string
  title: string
  occasion: string
  description: string
  accent: ThemeAccent
  mood: string
  size: "wide" | "tall" | "square"
  visual: { kind: "image"; image: ImageKey } | { kind: "gradient" }
}

const themeGradient: Record<ThemeAccent, string> = {
  rose: "from-rose/55 via-rose/20 to-ivory",
  mauve: "from-mauve/55 via-mauve/20 to-ivory",
  sage: "from-sage/55 via-sage/20 to-ivory",
  taupe: "from-taupe/60 via-taupe/20 to-ivory",
}

export const themeAccentGradient = themeGradient

export const themeSamples: ThemeSample[] = [
  {
    id: "love-letter",
    title: "The Love Letter",
    occasion: "A Romantic Theme",
    description:
      "An intimate, romantic design featuring warm tones, personal photographs, elegant typography, and a heartfelt message.",
    accent: "rose",
    mood: "Romantic & Intimate",
    size: "wide",
    visual: { kind: "image", image: "themeLoveLetter" },
  },
  {
    id: "aurelia",
    title: "Aurelia",
    occasion: "Muslim Wedding Theme",
    description:
      "A graceful, gold-toned design for a nikah or wedding celebration — elegant typography, warm jewel tones, and space for ceremony details, photographs, and heartfelt dua.",
    accent: "taupe",
    mood: "Elegant & Ceremonial",
    size: "tall",
    visual: { kind: "gradient" },
  },
  {
    id: "vowelle",
    title: "Vowelle",
    occasion: "Hindu Wedding Theme",
    description:
      "A vibrant, marigold-and-red inspired design for a Hindu wedding — rich color, ceremonial timelines, and a place for every ritual and relative's blessing.",
    accent: "rose",
    mood: "Vibrant & Traditional",
    size: "square",
    visual: { kind: "gradient" },
  },
  {
    id: "bloom",
    title: "Bloom",
    occasion: "Birthday Theme — Girl",
    description: "A soft, playful design featuring floral touches, joyful colors, photographs, and a sweet birthday reveal.",
    accent: "mauve",
    mood: "Playful & Joyful",
    size: "square",
    visual: { kind: "image", image: "themeBirthdaySurprise" },
  },
  {
    id: "confetti",
    title: "Confetti",
    occasion: "Birthday Theme — Boy",
    description:
      "A bold, energetic design with bright colors, balloons, and a celebratory countdown built for a boy's big day.",
    accent: "sage",
    mood: "Bold & Energetic",
    size: "tall",
    visual: { kind: "gradient" },
  },
  {
    id: "evermore",
    title: "Evermore",
    occasion: "Anniversary Theme",
    description:
      "A nostalgic, editorial design featuring a photo timeline, meaningful dates, captions, and shared memories.",
    accent: "sage",
    mood: "Nostalgic & Editorial",
    size: "wide",
    visual: { kind: "image", image: "themeMemoryBook" },
  },
  {
    id: "serendipity",
    title: "Serendipity",
    occasion: "Proposal Theme",
    description:
      "A breathless, cinematic design for the moment you ask — countdown, a love story timeline, and space for the question itself.",
    accent: "rose",
    mood: "Cinematic & Breathless",
    size: "square",
    visual: { kind: "gradient" },
  },
  {
    id: "keepsake",
    title: "Keepsake",
    occasion: "Friendship Theme",
    description:
      "A warm, nostalgic design for the friendship that's lasted years — inside jokes, shared memories, and photos worth keeping.",
    accent: "taupe",
    mood: "Warm & Nostalgic",
    size: "square",
    visual: { kind: "gradient" },
  },
]

export const steps = [
  {
    number: "01",
    title: "Choose Your Experience",
    description: "Pick the occasion and discover a theme that matches the feeling you want to create.",
  },
  {
    number: "02",
    title: "Make It Yours",
    description: "Share your photographs, names, messages, important dates, and personal details.",
  },
  {
    number: "03",
    title: "Deliver a Little Surprise",
    description:
      "We create your personalized website, share a preview when appropriate, and deliver a link you can send to your special person.",
  },
]

export const pricing = {
  signature: {
    name: "The Signature Experience",
    description: "Choose a ready-made theme and personalize it with your own photographs, names, dates, and messages.",
    price: "৳799",
    priceLabel: "Starting at",
    cta: "Choose Your Experience",
  },
  custom: {
    name: "The Custom Experience",
    description:
      "A more individually designed website for a unique story, a specific visual direction, or a more personalized experience.",
    price: "৳2,000",
    priceLabel: "Starting at",
    cta: "Let's Make Something Custom",
  },
  note: "Indicative prices for our initial Bangladesh launch — not final commercial terms. Final pricing is confirmed during your inquiry.",
}

export const faqs = [
  {
    question: "What exactly is Memoriqo?",
    answer:
      "Memoriqo creates personalized, interactive websites as digital gifts. You share your photographs, memories, and messages, and our team designs a small, beautiful website made for someone you love.",
  },
  {
    question: "How does a personalized website work?",
    answer:
      "You choose an occasion and a theme, submit your content through our intake form, and our team builds your experience by hand. Once it's ready, you receive a private link to preview and share.",
  },
  {
    question: "Can I use my own photos and messages?",
    answer:
      "Yes. Your photographs, names, dates, and personal messages are at the heart of every Memoriqo experience — the whole point is that it's made from your story, not a generic template.",
  },
  {
    question: "What occasions can I create a website for?",
    answer:
      "Birthdays, anniversaries, proposals, relationship stories, friendships, graduations and milestones, Muslim and Hindu weddings, and other meaningful personal moments.",
  },
  {
    question: "Do I need any technical skills?",
    answer:
      "None at all. You simply share your content with us through a guided form — our team handles the design and development.",
  },
  {
    question: "How do I order a personalized website?",
    answer:
      "Choose the Signature or Custom Experience, select a theme if applicable, and submit an inquiry. We'll follow up with next steps for sharing your content.",
  },
  {
    question: "How long does it take to create?",
    answer:
      "Timelines vary by package and current order volume. We'll confirm an estimated delivery window with you after you submit your inquiry.",
  },
  {
    question: "Can I request a custom design?",
    answer:
      "Yes — the Custom Experience is built specifically for a unique story or visual direction that doesn't fit a ready-made theme.",
  },
  {
    question: "How will I receive and share the website?",
    answer:
      "You'll receive a private link to your finished website, which you can send directly to your recipient through any messaging app or social platform.",
  },
  {
    question: "How long will the website remain available?",
    answer:
      "Hosting duration depends on your chosen package. We'll confirm the exact terms with you before delivery.",
  },
  {
    question: "Can I request changes before delivery?",
    answer:
      "We review your content with you before final delivery. Revision terms vary by package and will be confirmed during your order.",
  },
  {
    question: "How are my photos and personal information handled?",
    answer:
      "Your photographs and personal details are used only to build your personalized website and are handled with care. Specific data-handling terms will be shared with you before you submit any content.",
  },
]

export const inquiryUrl = "#inquire"
