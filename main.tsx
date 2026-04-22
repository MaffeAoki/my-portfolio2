@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
}

@layer base {
  body {
    @apply antialiased text-white bg-black;
  }
}

.glass {
  @apply bg-black/40 backdrop-blur-md border border-white/10;
}

.section-padding {
  @apply py-20 px-6 md:px-12 lg:px-24;
}
