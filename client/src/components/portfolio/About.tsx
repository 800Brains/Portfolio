import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code, Network, Shield } from 'lucide-react';
import profileImage from '@assets/generated_images/IMG_1805 2.png';

const timeline = [
  {
    year: '2026',
    title: 'Master\'s in Applied Cybersecurity',
    company: 'University of New Brunswick, Canada',
    description: 'Advancing expertise in cybersecurity, software engineering, and emerging technologies with focus on research excellence.',
    icon: GraduationCap,
  },
  {
    year: '2022 - Present',
    title: 'Network Technician',
    company: 'Somick Rhema, Nigeria',
    description: 'Configured and maintained networks supporting 100+ daily operations, reducing downtime and strengthening security protocols.',
    icon: Network,
  },
  {
    year: '2023',
    title: 'IT & Software Development Intern',
    company: 'NIIT, Enugu',
    description: 'Designed Java-based mobile applications with secure coding practices. Contributed to cybersecurity tasks and team-based projects.',
    icon: Code,
  },
  {
    year: '2022-2025',
    title: 'CompTIA Network+ Certified',
    company: 'CompTIA',
    description: 'Achieved industry-recognized certification in networking fundamentals, security, and infrastructure management.',
    icon: Shield,
  },
  {
    year: '2019 - 2025',
    title: 'BSc in Software Engineering',
    company: 'Babcock University, Nigeria',
    description: 'Graduated with Second Class Upper honors, building strong foundations in software development and system architecture.',
    icon: GraduationCap,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 px-2">
            About Me
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-3">
            My journey in software engineering, networking, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 items-center sm:items-start">
              <img
                src={profileImage}
                alt="Somtochukwu Joseph Obiagwu - Software Engineer & Network Technician"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20 flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">
                  Somtochukwu Joseph Obiagwu
                </h3>
                <p className="text-primary font-medium mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                  Software Engineer | Network Technician | Cybersecurity Enthusiast
                </p>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                  I&apos;m a Software Engineering graduate and CompTIA Network+ certified professional with hands-on 
                  experience in IT support, networking, and full-stack development. I specialize in configuring 
                  secure networks, troubleshooting IT systems, and building web applications that solve real-world problems.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
              Currently pursuing a Master&apos;s in Applied Cybersecurity at the University of New Brunswick, I&apos;m 
              passionate about bridging the gap between software development and network security. I&apos;ve supported 
              100+ daily business operations through network maintenance, developed mobile applications with secure 
              coding practices, and contributed to community healthcare initiatives through volunteer work.
            </p>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
              When I&apos;m not optimizing network performance or coding, you&apos;ll find me exploring emerging cybersecurity 
              trends, contributing to open-source projects, or organizing community outreach programs. I believe in 
              using technology to create positive impact and continuous learning to stay ahead in this rapidly evolving field.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 justify-center sm:justify-start">
              {['Problem Solver', 'Team Player', 'Security-Focused', 'Innovation-Driven'].map((trait) => (
                <span
                  key={trait}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative pl-10 sm:pl-12 group"
                >
                  <div className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <div className="p-3 sm:p-3.5 md:p-4 rounded-lg bg-card border border-border hover-elevate transition-all">
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">{item.year}</span>
                    <h4 className="font-semibold mt-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-primary text-xs sm:text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}