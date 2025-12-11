import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import collabImage from '@assets/generated_images/realtime_collaboration_app_dashboard.png';
import ecommerceImage from '@assets/generated_images/e-commerce_platform_interface.png';
import analyticsImage from '@assets/generated_images/analytics_dashboard_interface.png';

type ProjectType = 'all' | 'full-stack' | 'frontend' | 'backend' | 'open-source';

interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  tech: string[];
  type: ProjectType;
  liveUrl: string;
  repoUrl: string;
  metrics: { label: string; value: string }[];
  caseStudy: {
    problem: string;
    approach: string;
    solution: string;
    lessons: string;
  };
}

const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'LiamSphereProPreserve',
    slug: 'property-management',
    summary: 'Full-stack property management platform streamlining record tracking with user-friendly features.',
    coverImage: collabImage,
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'full-stack',
    liveUrl: 'https://github.com/800Brains/LiamssphereProreserve',
    repoUrl: 'https://github.com/800Brains/LiamssphereProreserve',
    metrics: [
      { label: 'Tech Stack', value: 'Web' },
      { label: 'Status', value: 'Live' },
      { label: 'Year', value: '2025' },
    ],
    caseStudy: {
      problem: 'Property managers needed an efficient system to track and manage property records without complex software.',
      approach: 'Built a clean, intuitive web interface using core web technologies for maximum accessibility and performance.',
      solution: 'Delivered a streamlined property management platform that enhanced accessibility and usability for all users.',
      lessons: 'Sometimes simple, well-executed solutions are more effective than over-engineered complex systems.',
    },
  },
  {
    id: 'proj-2',
    title: 'Network Infrastructure Setup',
    slug: 'network-setup',
    summary: 'Configured and maintained secure networks supporting 100+ daily operations at Somick Rhema.',
    coverImage: ecommerceImage,
    tech: ['TCP/IP', 'DNS/DHCP', 'VPN', 'Firewalls'],
    type: 'backend',
    liveUrl: '#',
    repoUrl: 'https://github.com/800Brains',
    metrics: [
      { label: 'Systems', value: '100+' },
      { label: 'Uptime', value: '99%+' },
      { label: 'Duration', value: '2+ yrs' },
    ],
    caseStudy: {
      problem: 'Organization needed reliable network infrastructure to support daily operations without interruption.',
      approach: 'Implemented robust networking protocols with security best practices and proactive monitoring.',
      solution: 'Reduced network downtime significantly while maintaining security protocols for 100+ daily operations.',
      lessons: 'Proactive maintenance and proper security configuration prevent most network issues before they occur.',
    },
  },
  {
    id: 'proj-3',
    title: 'Java Mobile Applications',
    slug: 'mobile-apps',
    summary: 'Designed secure Java-based mobile applications during NIIT internship with version control.',
    coverImage: analyticsImage,
    tech: ['Java', 'Android', 'Git', 'Security'],
    type: 'full-stack',
    liveUrl: '#',
    repoUrl: 'https://github.com/800Brains',
    metrics: [
      { label: 'Platform', value: 'Android' },
      { label: 'Security', value: 'High' },
      { label: 'Duration', value: '6 months' },
    ],
    caseStudy: {
      problem: 'Internship required developing mobile applications with secure coding practices and proper version control.',
      approach: 'Applied Java best practices, implemented security measures, and utilized Git for collaborative development.',
      solution: 'Successfully delivered mobile applications with secure architecture and proper code management.',
      lessons: 'Version control and secure coding practices are essential foundations for professional software development.',
    },
  },
];

const filters: { value: ProjectType; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'full-stack', label: 'Full-Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 px-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-3">
            A selection of projects showcasing my skills in networking, development, and security.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 md:mb-10 px-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              data-testid={`button-filter-${filter.value}`}
              className="text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden hover-elevate cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-project-${project.slug}`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                      <span className="text-white text-xs sm:text-sm font-medium flex items-center gap-1">
                        View Details <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-3 sm:p-4 md:p-5">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-1.5 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl pr-8">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-2 sm:p-3 md:p-4 bg-muted rounded-lg">
                        <p className="text-base sm:text-lg md:text-2xl font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                          1
                        </span>
                        Problem
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm pl-7 sm:pl-8">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-chart-4/20 text-chart-4 flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                          2
                        </span>
                        Approach
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm pl-7 sm:pl-8">
                        {selectedProject.caseStudy.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                          3
                        </span>
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm pl-7 sm:pl-8">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 flex items-center gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                          4
                        </span>
                        Lessons Learned
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm pl-7 sm:pl-8">
                        {selectedProject.caseStudy.lessons}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <Button asChild className="flex-1 text-xs sm:text-sm h-9 sm:h-10">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1 text-xs sm:text-sm h-9 sm:h-10">
                      <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}