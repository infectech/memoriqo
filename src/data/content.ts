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

export type ThemeSample = {
  id: string
  title: string
  description: string
  accent: "rose" | "sage" | "mauve"
  mood: string
  image: ImageKey
}

export const themeSamples: ThemeSample[] = [
  {
    id: "love-letter",
    title: "The Love Letter",
    description:
      "An intimate, romantic design featuring warm tones, personal photographs, elegant typography, and a heartfelt message.",
    accent: "rose",
    mood: "Romantic & Intimate",
    image: "themeLoveLetter",
  },
  {
    id: "birthday-surprise",
    title: "The Birthday Surprise",
    description: "A playful design featuring joyful colors, a celebratory opening, photographs, and a memorable reveal.",
    accent: "mauve",
    mood: "Playful & Joyful",
    image: "themeBirthdaySurprise",
  },
  {
    id: "memory-book",
    title: "The Memory Book",
    description: "A nostalgic, editorial design featuring a photo timeline, meaningful dates, captions, and shared memories.",
    accent: "sage",
    mood: "Nostalgic & Editorial",
    image: "themeMemoryBook",
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
      "Birthdays, anniversaries, relationship stories, friendships, graduations and milestones, weddings and invitations, and other meaningful personal moments.",
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
