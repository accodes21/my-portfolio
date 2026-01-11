"use client";
import { Footer, Header, Hero, Loader } from "@/data/exports";
import { About, Contact, Projects } from "@/data/exports";
import { useEffect, useRef, useState } from "react";
// import Lenis from "@studio-freight/lenis";
import Experience from "@/pages/Experience";

export default function Home() {
  const loader = useRef(null);
  const path = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // const lenis = new Lenis();

    // function raf(time) {
    //   lenis.raf(time);

    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // Handle scroll to show/hide back to top button
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Loader />
      <Header />
      <main className="h-full w-full flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <button
          onClick={scrollToTop}
          className={`fixed bottom-3 md:bottom-10 right-3 md:right-8 w-12 h-12 rounded-full border border-yellow-400 bg-black/80 text-white flex items-center justify-center shadow-lg hover:bg-black transition-all duration-300 z-50 ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#f1cf29"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </main>
    </>
  );
}
