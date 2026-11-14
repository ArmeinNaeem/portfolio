"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: (origin: { x: number; y: number }) => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <nav className="nav-shell container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label={`${site.name}, home`}>
            <span className="brand-name">{site.name}</span>
          </a>
          <div className="desktop-nav">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                onToggleTheme({
                  x: bounds.left + bounds.width / 2,
                  y: bounds.top + bounds.height / 2,
                });
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-cta" href="#contact">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
            <button
              className="icon-button menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="mobile-drawer"
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="drawer-heading">
                <span>Explore</span>
                <button className="icon-button" type="button" onClick={closeMenu} aria-label="Close menu">
                  <X size={19} />
                </button>
              </div>
              {links.map((link, index) => (
                <a className="drawer-link" href={link.href} key={link.href} onClick={closeMenu}>
                  <span className="drawer-index">0{index + 1}</span>
                  {link.label}
                  <ArrowUpRight size={18} />
                </a>
              ))}
              <a className="drawer-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
