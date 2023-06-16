import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"

const jetbrains = FontSans({
  subsets: ["latin"]
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
