import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/800Brains', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/obiagwu-somtochukwu-50b316233', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:obiagwusomtochukwu27@gmail.com', label: 'Email' },
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
    <footer className="py-6 sm:py-8 md:py-10 lg:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg sm:text-xl font-bold tracking-tight inline-block">
              Somto <span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2 sm:mt-3 max-w-xs mx-auto md:mx-0">
              Software Engineer | Network Technician | Cybersecurity Enthusiast in New Brunswick, Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <p className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</p>
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <p className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Connect</p>
            <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate transition-colors"
                  aria-label={link.label}
                  data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Obiagwu Somtochukwu Joseph. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap justify-center">
            <span>Built with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
            <span>using</span>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <SiReact className="w-3 h-3 sm:w-4 sm:h-4 text-[#61DAFB]" title="React" />
              <SiTypescript className="w-3 h-3 sm:w-4 sm:h-4 text-[#3178C6]" title="TypeScript" />
              <SiTailwindcss className="w-3 h-3 sm:w-4 sm:h-4 text-[#06B6D4]" title="Tailwind CSS" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}