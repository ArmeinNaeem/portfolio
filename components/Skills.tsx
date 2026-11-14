"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Globe2,
  Layers3,
  Leaf,
  type LucideIcon,
  Network,
  PanelsTopLeft,
  Smartphone,
  Wind,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const icons: Record<(typeof skills)[number]["icon"], LucideIcon> = {
  react: Code2,
  next: PanelsTopLeft,
  javascript: Braces,
  typescript: FileCode2,
  python: Code2,
  node: Network,
  express: Layers3,
  mongodb: Leaf,
  supabase: Database,
  flutter: Smartphone,
  sql: Database,
  tailwind: Wind,
  api: Globe2,
};

const orbitStyle = (angle: number): CSSProperties & { "--orbit-angle": string } => ({
  "--orbit-angle": `${angle}deg`,
});

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-skills section-anchor" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <motion.div
          className="section-heading skills-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
        >
          <div>
            <p className="section-label"><span>04</span> The toolkit</p>
            <h2 id="skills-title">The right tools.<br /><span>Thoughtfully used.</span></h2>
          </div>
          <p className="section-intro">
            A well-rounded stack for turning ambitious ideas into fast,
            reliable, wonderfully usable products.
          </p>
        </motion.div>

        <motion.div
          className="skills-orbit"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          role="group"
          aria-label="Technology skills arranged in an orbit. Hover or focus to pause."
        >
          <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
          <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />
          <div className="orbit-center" aria-hidden="true">
            <span className="orbit-center-spark">✳</span>
            <span>Built for</span>
            <strong>the web</strong>
            <small>MY TECH STACK</small>
          </div>
          <div className={`orbit-track${reduceMotion ? " orbit-track--still" : ""}`}>
            {skills.map((skill, index) => {
              const Icon = icons[skill.icon];
              return (
                <button
                  type="button"
                  className={`orbit-node orbit-node--${skill.icon}`}
                  key={skill.name}
                  style={orbitStyle(index * (360 / skills.length))}
                  aria-label={skill.name}
                  title={skill.name}
                >
                  <span className="orbit-node-counter">
                    <span className="orbit-node-face">
                      <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="orbit-node-label">{skill.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="toolkit-note">
          <span className="toolkit-note-mark">✳</span>
          <p>Hover to pause &amp; explore · Always learning what&apos;s next</p>
          <span className="toolkit-note-line" />
        </div>
        <p className="additional-skills">
          Also familiar with <span>C++</span><span>Assembly</span>
          <span>Dart</span><span>C#</span><span>Visual Studio Code</span><span>PyCharm</span>
        </p>
      </div>
    </section>
  );
}
