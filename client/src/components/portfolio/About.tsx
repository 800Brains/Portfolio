import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import profileImage from '@assets/generated_images/software_engineer_headshot_portrait.png';

const timeline = [
  {
    year: '2023',
    title: 'Senior Full-Stack Engineer',
    company: 'Tech Corp',
    description: 'Leading development of enterprise applications serving 100k+ users.',
    icon: Briefcase,
  },
  {
    year: '2021',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description: 'Built MVP and scaled product from 0 to 50k users.',
    icon: Code,
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Crafted responsive web experiences for Fortune 500 clients.',
    icon: Award,
  },
  {
    year: '2018',
    title: 'Computer Science Degree',
    company: 'University of Toronto',
    description: 'Graduated with honors, specialized in distributed systems.',
    icon: GraduationCap,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 lg:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={profileImage}
                alt="Alex Doe - Software Engineer"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Alex Doe</h3>
                <p className="text-primary font-medium mb-3">Full-Stack Engineer</p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate software engineer with 5+ years of experience building web applications. 
                  I specialize in React, Node.js, and cloud technologies. I love creating elegant solutions 
                  to complex problems and am committed to writing clean, maintainable code.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical 
              articles, or mentoring aspiring developers. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Lifelong Learner', 'Detail-Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border hover-elevate transition-all">
                    <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                    <h4 className="font-semibold mt-1">{item.title}</h4>
                    <p className="text-primary text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
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
