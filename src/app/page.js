"use client";
import { Footer, Header, Hero, Loader } from "@/components/exports";
import { About, Contact, Projects } from "@/pages/exports";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const loader = useRef(null);
  const path = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <Loader />
      <Header />
      <main className="h-full w-full flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
