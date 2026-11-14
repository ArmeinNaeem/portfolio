"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certifications, experience } from "@/data/profile";
import { site } from "@/data/site";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-about section-anchor" id="about" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
        >
          <div>
            <p className="section-label"><span>03</span> A little about me</p>
            <h2 id="about-title">The experience<br /><span>behind the work.</span></h2>
          </div>
          <p className="section-intro">
            A computer science graduate with hands-on experience building web
            interfaces and supporting real-world operations.
          </p>
        </motion.div>

        <div className="background-grid">
          <motion.div
            className="background-column"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
          >
            <article className="background-card education-card">
              <p className="background-kicker">Education</p>
              <h3>{site.education}</h3>
              <p className="background-institution">{site.university}</p>
              <div className="education-details">
                <span>{site.educationPeriod}</span>
                <span>CGPA {site.cgpa}</span>
              </div>
            </article>
            <article className="background-card certification-card">
              <p className="background-kicker">Certificates</p>
              <ul>
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </article>
          </motion.div>

          <motion.div
            className="background-card experience-card"
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08 }}
          >
            <p className="background-kicker">Experience</p>
            <div className="experience-list">
              {experience.map((position) => (
                <article className="experience-item" key={position.role}>
                  <div className="experience-heading">
                    <div>
                      <h3>{position.role}</h3>
                      <p>{position.organization}</p>
                    </div>
                    <span>{position.duration}</span>
                  </div>
                  <ul>
                    {position.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
