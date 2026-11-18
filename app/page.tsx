import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Creators from "@/components/Creators";
import Faq from "@/components/Faq";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import type { AppProps } from 'next/app';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Creators />
        <Faq />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
