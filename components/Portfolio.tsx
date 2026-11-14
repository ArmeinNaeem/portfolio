"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { MotionConfig, motion, useReducedMotion, useScroll } from "framer-motion";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import ServiceMarquee from "@/components/ServiceMarquee";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = (origin: { x: number; y: number }) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.style.setProperty("--theme-reveal-x", `${origin.x}px`);
    root.style.setProperty("--theme-reveal-y", `${origin.y}px`);
    root.style.setProperty(
      "--theme-reveal-radius",
      `${Math.hypot(window.innerWidth, window.innerHeight)}px`,
    );

    if (reduceMotion) {
      setTheme(nextTheme);
      return;
    }

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
        root.dataset.theme = nextTheme;
      });
      return;
    }

    root.classList.add("theme-fallback-transition");
    setTheme(nextTheme);
    window.setTimeout(
      () => root.classList.remove("theme-fallback-transition"),
      420,
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-shell">
        <motion.div
          className="scroll-progress"
          style={{ scaleX: reduceMotion ? 0 : scrollYProgress }}
          aria-hidden="true"
        />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <ServiceMarquee />

          <section className="section section-projects section-anchor" id="projects" aria-labelledby="projects-title">
            <div className="container">
              <motion.div
                className="section-heading"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduceMotion ? 0 : 0.6 }}
              >
                <div>
                  <p className="section-label"><span>02</span> Selected work</p>
                  <h2 id="projects-title">A few things<br /><span>made with care.</span></h2>
                </div>
                <p className="section-intro">
                  A selection of digital experiences built to feel as good as
                  they function. Each one starts with a real-world problem.
                </p>
              </motion.div>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </div>
              <p className="projects-footnote">
                <span /> More thoughtful work in progress
              </p>
            </div>
          </section>

          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
