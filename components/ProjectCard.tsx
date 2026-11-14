"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const fromX = index % 2 === 0 ? -24 : 24;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, x: fromX, y: 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      className={`project-card project-card--${project.tone} group`}
    >
      <div
        className={`project-visual project-visual--${project.tone}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 1200px) calc(55vw - 60px), 650px"
          quality={90}
          className="project-image"
        />
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-open"
            aria-label={`View ${project.name} live demo`}
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
      <div className="project-meta">
        <p className="eyebrow">{project.category}</p>
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.name}</h3>
        {(project.demoUrl || project.githubUrl) && (
          <div className="project-links">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Live demo of ${project.name}`}>
                <ArrowUpRight size={17} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
                <Github size={16} />
              </a>
            )}
          </div>
        )}
      </div>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </motion.article>
  );
}
