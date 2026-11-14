"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const roles = ["React Developer", "Next.js Developer", "MERN Stack Developer"];

type CodeToken = {
  text: string;
  tone?: "keyword" | "string" | "function" | "tag" | "comment" | "accent";
};

const workshopTabs: {
  label: string;
  file: string;
  previewTitle: string;
  previewDescription: string;
  previewMetric: string;
  code: CodeToken[][];
}[] = [
  {
    label: "React",
    file: "hello-world.tsx",
    previewTitle: "Small ideas,",
    previewDescription: "made into lovely things.",
    previewMetric: "A thoughtful interface",
    code: [
      [{ text: "const ", tone: "keyword" }, { text: "Portfolio ", tone: "accent" }, { text: "= () => {" }],
      [{ text: "  return " }, { text: "(" }],
      [{ text: "    <", tone: "tag" }, { text: "section", tone: "tag" }, { text: " className=", tone: "keyword" }, { text: '"good-things"', tone: "string" }, { text: ">", tone: "tag" }],
      [{ text: "      <", tone: "tag" }, { text: "h1", tone: "tag" }, { text: ">", tone: "tag" }, { text: "Hello, web.", tone: "string" }, { text: "</", tone: "tag" }, { text: "h1", tone: "tag" }, { text: ">", tone: "tag" }],
      [{ text: "      <", tone: "tag" }, { text: "Craft", tone: "tag" }, { text: " />", tone: "tag" }],
      [{ text: "    </", tone: "tag" }, { text: "section", tone: "tag" }, { text: ">", tone: "tag" }],
      [{ text: "  );" }],
      [{ text: "};" }],
    ],
  },
  {
    label: "Next.js",
    file: "page.tsx",
    previewTitle: "A little more",
    previewDescription: "than just a website.",
    previewMetric: "Designed to feel fast",
    code: [
      [{ text: "export default " }, { text: "function ", tone: "keyword" }, { text: "Page" , tone: "function" }, { text: "() {" }],
      [{ text: "  return " }, { text: "(" }],
      [{ text: "    <", tone: "tag" }, { text: "main", tone: "tag" }, { text: " className=", tone: "keyword" }, { text: '"min-h-screen"', tone: "string" }, { text: ">", tone: "tag" }],
      [{ text: "      <", tone: "tag" }, { text: "h1", tone: "tag" }, { text: ">", tone: "tag" }, { text: "Made for what's next", tone: "string" }, { text: "</", tone: "tag" }, { text: "h1", tone: "tag" }, { text: ">", tone: "tag" }],
      [{ text: "      <", tone: "tag" }, { text: "ProjectGrid", tone: "tag" }, { text: " />", tone: "tag" }],
      [{ text: "    </", tone: "tag" }, { text: "main", tone: "tag" }, { text: ">", tone: "tag" }],
      [{ text: "  );" }],
      [{ text: "}" }],
    ],
  },
  {
    label: "MERN",
    file: "server.js",
    previewTitle: "From idea",
    previewDescription: "all the way to launch.",
    previewMetric: "Full stack, thoughtfully",
    code: [
      [{ text: "app.", tone: "accent" }, { text: "get", tone: "function" }, { text: '("/api/ideas", ', tone: "string" }],
      [{ text: "  async " }, { text: "(request, response) => {" }],
      [{ text: "    const ", tone: "keyword" }, { text: "ideas = await " }, { text: "Idea", tone: "accent" }],
      [{ text: "      ." }, { text: "find", tone: "function" }, { text: "({ published: " }, { text: "true", tone: "keyword" }, { text: " });" }],
      [{ text: "    response." }, { text: "json", tone: "function" }, { text: "(ideas);" }],
      [{ text: "  }" }],
      [{ text: ");" }],
      [{ text: "// ready for the real world", tone: "comment" }],
    ],
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [workshopIndex, setWorkshopIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const selectedTab = workshopTabs[workshopIndex];

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(
      () => setRoleIndex((current) => (current + 1) % roles.length),
      2600,
    );
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="hero-section section-anchor" id="home" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-300/45 via-teal-300/20 to-transparent blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 46, 16, 0], y: [0, 30, -22, 0], scale: [1, 1.12, 0.96, 1] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-36 top-[4%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-300/45 via-indigo-300/20 to-transparent blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -36, -8, 0], y: [0, 34, 64, 0], scale: [1, 0.94, 1.12, 1] }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-[-18rem] left-[28%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/35 via-amber-200/20 to-transparent blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 38, -28, 0], y: [0, -42, -12, 0], scale: [1, 1.08, 0.94, 1] }
          }
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
        />
      </div>
      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill">
            <span className="availability-dot" />
            {site.availability}
          </div>
          <p className="hero-kicker">
            <Sparkles size={14} /> {site.title}
          </p>
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            <span className="hero-title-accent">Remarkable</span> web.
          </h1>
          <div className="hero-role" aria-live="polite">
            <span className="role-label">I&apos;m a</span>
            <span className="role-value" key={roles[roleIndex]}>
              {roles[roleIndex]}
            </span>
            <span className="typing-caret" aria-hidden="true" />
          </div>
          <p className="hero-description">
            I build fast, responsive, modern web apps — from landing pages to
            full-stack products. Thoughtfully designed, carefully engineered.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDown size={16} />
            </a>
            <a className="button button-quiet" href="#contact">
              Contact me <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="hero-footnote-line" />
            <span>{site.education} · {site.graduationYear}</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-workshop"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="workshop-window">
            <div className="workshop-topbar">
              <span className="workshop-window-dots" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="workshop-window-title"><Code2 size={13} /> armein / digital-workshop</span>
              <span className="workshop-live"><span /> LIVE</span>
            </div>
            <div className="workshop-tabs" role="tablist" aria-label="Choose a technology preview">
              {workshopTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  id={`workshop-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={workshopIndex === index}
                  aria-controls="workshop-panel"
                  tabIndex={workshopIndex === index ? 0 : -1}
                  className={workshopIndex === index ? "workshop-tab is-active" : "workshop-tab"}
                  onClick={() => setWorkshopIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      const direction = event.key === "ArrowRight" ? 1 : -1;
                      const nextIndex = (workshopIndex + direction + workshopTabs.length) % workshopTabs.length;
                      setWorkshopIndex(nextIndex);
                      document.getElementById(`workshop-tab-${nextIndex}`)?.focus();
                    }
                    if (event.key === "Home" || event.key === "End") {
                      event.preventDefault();
                      const nextIndex = event.key === "Home" ? 0 : workshopTabs.length - 1;
                      setWorkshopIndex(nextIndex);
                      document.getElementById(`workshop-tab-${nextIndex}`)?.focus();
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
              <span className="workshop-tab-hint">click to explore</span>
            </div>
            <div
              className="workshop-content"
              id="workshop-panel"
              role="tabpanel"
              aria-labelledby={`workshop-tab-${workshopIndex}`}
              key={selectedTab.label}
            >
              <div className="workshop-code">
                <div className="workshop-pane-label">
                  <span>{selectedTab.file}</span><span>TSX</span>
                </div>
                <pre aria-label={`${selectedTab.label} code example`}><code>
                  {selectedTab.code.map((line, lineIndex) => (
                    <span className="code-line" key={`${selectedTab.label}-${lineIndex}`}>
                      <span className="code-line-number">{lineIndex + 1}</span>
                      <span>
                        {line.map((token, tokenIndex) => (
                          <span className={token.tone ? `code-${token.tone}` : undefined} key={tokenIndex}>{token.text}</span>
                        ))}
                      </span>
                    </span>
                  ))}
                </code></pre>
              </div>
              <div className={`workshop-preview workshop-preview--${workshopIndex}`}>
                <div className="preview-browser">
                  <span /><span /><span />
                  <i>your-next-idea.dev</i>
                  <ArrowUpRight size={12} />
                </div>
                <div className="preview-canvas">
                  <span className="preview-eyebrow">{selectedTab.previewMetric}</span>
                  <div className="preview-orb" aria-hidden="true"><span>✳</span></div>
                  <strong>{selectedTab.previewTitle}<br />{selectedTab.previewDescription}</strong>
                  <span className="preview-button">Explore <ArrowUpRight size={10} /></span>
                  <span className="preview-caption">A SMALL PREVIEW OF WHAT&apos;S POSSIBLE</span>
                </div>
              </div>
            </div>
            <div className="workshop-status">
              <span><i /> All systems creative</span>
              <span>Frontend only <span className="status-separator">·</span> made by Armein</span>
            </div>
          </div>
          <span className="workshop-float workshop-float--top">ideas → interface</span>
          <span className="workshop-float workshop-float--bottom">✳ made with intention</span>
        </motion.div>
      </div>
      <a href="#projects" className="scroll-cue" aria-label="Scroll to projects">
        <span>Scroll to explore</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
