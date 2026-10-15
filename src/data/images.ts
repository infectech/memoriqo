function unsplash(id: string, params = "w=1200&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`
}

export const images = {
  heroSilhouette: unsplash("photo-1494774157365-9e04c6720e47"),
  heroBouquet: unsplash("photo-1529636798458-92182e662485"),

  experienceBirthday: unsplash("photo-1530103862676-de8c9debad1d"),
  experienceAnniversary: unsplash("photo-1494774157365-9e04c6720e47"),
  experienceOurStory: unsplash("photo-1491438590914-bc09fcaaf77a"),
  experienceFriendship: unsplash("photo-1543807535-eceef0bc6599"),
  experienceMilestones: unsplash("photo-1541339907198-e08756dedf3f"),
  experienceWedding: unsplash("photo-1522673607200-164d1b6ce486"),

  themeLoveLetter: unsplash("photo-1455390582262-044cdead277a"),
  themeBirthdaySurprise: unsplash("photo-1558636508-e0db3814bd1d"),
  themeMemoryBook: unsplash("photo-1527529482837-4698179dc6ce"),

  personalTouch: unsplash("photo-1484665754804-74b091211472"),
}

export type ImageKey = keyof typeof images
