import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiPython, SiMysql, SiCplusplus, SiGit, SiGithub, SiPostman, SiLinux, SiWireshark } from 'react-icons/si';
import { Network, Shield, Server, Database, Code2, Coffee, Sheet, FileCode, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  // Programming Languages
  { name: 'JavaScript', icon: SiJavascript, proficiency: 90, category: 'Programming', color: '#F7DF1E' },
  { name: 'Java', icon: Coffee, proficiency: 90, category: 'Programming', color: '#007396' },
  { name: 'HTML/CSS', icon: SiHtml5, proficiency: 90, category: 'Programming', color: '#E34F26' },
  { name: 'Python', icon: SiPython, proficiency: 75, category: 'Programming', color: '#3776AB' },
  { name: 'SQL', icon: SiMysql, proficiency: 80, category: 'Programming', color: '#4479A1' },
  { name: 'C++', icon: SiCplusplus, proficiency: 70, category: 'Programming', color: '#00599C' },
  
  // Networking & Infrastructure
  { name: 'TCP/IP', icon: Network, proficiency: 92, category: 'Networking', color: '#0066CC' },
  { name: 'DNS/DHCP', icon: Server, proficiency: 88, category: 'Networking', color: '#00AA88' },
  { name: 'VPN & Firewalls', icon: Shield, proficiency: 85, category: 'Security', color: '#FF6B35' },
  { name: 'Routing & Switching', icon: Network, proficiency: 90, category: 'Networking', color: '#4CAF50' },
  
  // Security & Tools
  { name: 'Wireshark', icon: SiWireshark, proficiency: 82, category: 'Security', color: '#1679A7' },
  { name: 'Network Security', icon: Shield, proficiency: 85, category: 'Security', color: '#D32F2F' },
  
  // Development Tools
  { name: 'Git/GitHub', icon: SiGit, proficiency: 88, category: 'Tools', color: '#F05032' },
  { name: 'VS Code', icon: FileCode, proficiency: 90, category: 'Tools', color: '#007ACC' },
  { name: 'Eclipse', icon: Code2, proficiency: 85, category: 'Tools', color: '#2C2255' },
  { name: 'Postman', icon: SiPostman, proficiency: 80, category: 'Tools', color: '#FF6C37' },
  { name: 'Excel', icon: Sheet, proficiency: 92, category: 'Tools', color: '#217346' },
  
  // Operating Systems
  { name: 'Linux', icon: SiLinux, proficiency: 82, category: 'OS', color: '#FCC624' },
  { name: 'Windows', icon: Monitor, proficiency: 90, category: 'OS', color: '#0078D6' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = ['Programming', 'Networking', 'Security', 'Tools', 'OS'];

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 px-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-3">
            A comprehensive toolkit spanning networking, cybersecurity, and software development.
          </p>
        </motion.div>

        {/* Category Badges */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-7 md:mb-8 px-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="hover-elevate group overflow-visible h-full">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <skill.icon
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-xs sm:text-sm lg:text-base truncate">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {skill.category}
                      </p>
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

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-4 sm:p-5 md:p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-center">
            Additional Expertise
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div>
              <h4 className="font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Methodologies
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                <li>• IT Troubleshooting</li>
                <li>• Agile Development</li>
                <li>• SDLC</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Cybersecurity
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                <li>• Threat Evaluation</li>
                <li>• Vulnerability Scanning</li>
                <li>• Infrastructure Protection</li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Certifications
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                <li>• CompTIA Network+</li>
                <li>• Web Technologies</li>
                <li>• Mobile App Development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}