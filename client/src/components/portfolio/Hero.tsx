import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = ['Software Engineer', 'Network Technician', 'Cybersecurity Enthusiast', 'Full-Stack Developer'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, shouldReduceMotion]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-16 md:py-12 px-3 sm:px-4">
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          />
        </div>
      )}

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Hello, I&apos;m</p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight px-2">
            Somtochukwu Joseph Obiagwu
          </h1>
          
          <div className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 flex items-center justify-center px-2">
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary text-center break-words">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            CompTIA Network+ certified professional specializing in network infrastructure, 
            cybersecurity, and full-stack development. Currently pursuing Master&apos;s in Applied 
            Cybersecurity at the University of New Brunswick.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 px-2"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              data-testid="button-view-work"
              className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10 md:h-11"
            >
              View My Work
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              data-testid="button-download-cv" 
              asChild
              className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10 md:h-11"
            >
              <a href="/Somto_Obiagwu_CV.pdf" download="Somtochukwu_Obiagwu_CV.pdf">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Download CV
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={scrollToContact} 
              data-testid="button-contact-hero"
              className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10 md:h-11"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Contact Me
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-3xl mx-auto px-2"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Systems Supported</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">CompTIA</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Network+ Certified</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">6+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tech Stack Skills</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}