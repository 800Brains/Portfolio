import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'Privacy', href: '/privacy' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/alex', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/alex', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/alex', label: 'Twitter' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              Alex<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              Full-stack engineer building performant, accessible web applications in Toronto, Canada.
            </p>
          </div>

          <div>
            <p className="font-medium mb-4">Quick Links</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-medium mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate transition-colors"
                  aria-label={link.label}
                  data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Alex Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>using</span>
            <div className="flex items-center gap-1.5">
              <SiReact className="w-4 h-4 text-[#61DAFB]" title="React" />
              <SiTypescript className="w-4 h-4 text-[#3178C6]" title="TypeScript" />
              <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" title="Tailwind CSS" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
