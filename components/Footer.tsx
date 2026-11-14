import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-name">{site.name}</span>
        </a>
        <p>Made with intention <span aria-hidden="true">✳</span> © {new Date().getFullYear()}</p>
        <div className="footer-social">
          {site.github && (
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          )}
          <a href="#home" aria-label="Back to top">
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
