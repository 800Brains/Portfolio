import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, SiAmazon, SiNextdotjs, SiTailwindcss, SiGraphql, SiMongodb, SiGit, SiFigma } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'React', icon: SiReact, proficiency: 95, years: 5, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, proficiency: 90, years: 4, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, proficiency: 92, years: 5, color: '#339933' },
  { name: 'Next.js', icon: SiNextdotjs, proficiency: 88, years: 3, color: '#000000' },
  { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 85, years: 4, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, proficiency: 80, years: 3, color: '#47A248' },
  { name: 'GraphQL', icon: SiGraphql, proficiency: 82, years: 3, color: '#E10098' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 90, years: 3, color: '#06B6D4' },
  { name: 'Docker', icon: SiDocker, proficiency: 78, years: 3, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazon, proficiency: 75, years: 3, color: '#FF9900' },
  { name: 'Git', icon: SiGit, proficiency: 92, years: 5, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, proficiency: 70, years: 2, color: '#F24E1E' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="hover-elevate group overflow-visible">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <skill.icon
                        className="w-5 h-5 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm lg:text-base">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground">{skill.years} years</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
