import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald, Pixelify_Sans } from "next/font/google";
import GrainEffect from "@/components/Visual-effect/grain-effect"; // Adjust the import path as necessary
import "./globals.css";
import { cn } from "@/lib/utils";

//font
const MainFont = Bricolage_Grotesque({subsets: ["latin"]  });
const OswaldFont = Oswald({subsets: ["latin"] ,variable: "--font-oswald"});
const pixelFont = Pixelify_Sans({subsets: ["latin"] ,variable: "--font-pixel"});

export const metadata: Metadata = {
  title: "unstoppablesid",
  description: "I specialize in crafting efficient, scalable, and innovative solutions through clean and effective code. My expertise spans front-end development, back-end development, full-stack applications, AI, or machine learning], and I thrive on turning ideas into functional and user-friendly digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className , OswaldFont.variable , pixelFont.variable)}>
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}
