"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-contact section-anchor" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          className="contact-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
        >
          <div className="contact-copy">
            <p className="section-label"><span>05</span> Your next move</p>
            <h2 id="contact-title">Let&apos;s make<br /><span>something matter.</span></h2>
            <p className="contact-description">
              Have a project in mind, a question, or just want to say hello?
              My inbox is always open.
            </p>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email} <ArrowUpRight size={19} />
            </a>
            {(site.linkedin || site.github) && (
              <div className="social-links">
                {site.linkedin && (
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
                  </a>
                )}
                {site.github && (
                  <a href={site.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-heading">
              <span className="form-icon"><Mail size={17} /></span>
              <span>A little about your project</span>
            </div>
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="Jane Smith" autoComplete="name" />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="jane@company.com" autoComplete="email" />
            </label>
            <label>
              <span>What are you thinking?</span>
              <textarea name="message" rows={3} placeholder="A few words about your project..." />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Send a note <ArrowDownRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
