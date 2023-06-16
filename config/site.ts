export type SiteConfig = typeof siteConfig

export const siteConfig = {
  header_title: "Tailwind Sheet",
  header_description:
    "Tailwind css made easy, just copy and paste the code you need, no more no less",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  content : {
    hero_description: "tailwind sheets is a collection of code snippets for your project, very similar to tailwind components, but with the difference that you can copy and paste the code you need, and customize it as you want.",
  }
}
