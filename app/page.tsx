import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ComponentsSheet from "@/components/sheet"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Tailwind css made easy, <br className="hidden sm:inline" />
          Just copy and paste the code you need, <br className="hidden sm:inline" />
          No more no less
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          tailwind sheets is a collection of code snippets for your project, very similar to tailwind components, but with the difference that you can copy and paste the code you need, and customize it as you want.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>

      <div className="h-10" />
      <ComponentsSheet />
    </section>
  )
}
