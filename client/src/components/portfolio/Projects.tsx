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
    title: 'Realtime Collaboration App',
    slug: 'realtime-collab',
    summary: 'A collaborative editor with Operational Transform for real-time document editing.',
    coverImage: collabImage,
    tech: ['React', 'WebSocket', 'Node.js', 'PostgreSQL'],
    type: 'full-stack',
    liveUrl: 'https://collab.example.com',
    repoUrl: 'https://github.com/alex/collab',
    metrics: [
      { label: 'Active Users', value: '10k+' },
      { label: 'Avg Latency', value: '120ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    caseStudy: {
      problem: 'Teams needed a way to collaboratively edit documents in real-time without conflicts or data loss.',
      approach: 'Implemented Operational Transform algorithm with WebSocket connections for instant synchronization.',
      solution: 'Built a scalable real-time editor supporting 100+ concurrent users per document with conflict resolution.',
      lessons: 'Learned the importance of optimistic UI updates and proper error handling in distributed systems.',
    },
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Platform',
    slug: 'ecommerce',
    summary: 'Modern e-commerce solution with cart, checkout, and payment integration.',
    coverImage: ecommerceImage,
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    type: 'full-stack',
    liveUrl: 'https://shop.example.com',
    repoUrl: 'https://github.com/alex/shop',
    metrics: [
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Page Load', value: '1.2s' },
      { label: 'Monthly GMV', value: '$500k' },
    ],
    caseStudy: {
      problem: 'Client needed a fast, modern e-commerce site to replace their legacy platform.',
      approach: 'Used Next.js for SSR/SSG, Stripe for payments, and optimized images for performance.',
      solution: 'Delivered a performant e-commerce platform with 99+ Lighthouse scores across all metrics.',
      lessons: 'Performance optimization directly impacts conversion rates and user satisfaction.',
    },
  },
  {
    id: 'proj-3',
    title: 'Analytics Dashboard',
    slug: 'analytics',
    summary: 'Real-time analytics dashboard with customizable widgets and data visualization.',
    coverImage: analyticsImage,
    tech: ['React', 'D3.js', 'GraphQL', 'Redis'],
    type: 'frontend',
    liveUrl: 'https://analytics.example.com',
    repoUrl: 'https://github.com/alex/analytics',
    metrics: [
      { label: 'Data Points', value: '1M+/day' },
      { label: 'Widgets', value: '20+' },
      { label: 'Export Formats', value: '5' },
    ],
    caseStudy: {
      problem: 'Marketing team needed real-time visibility into campaign performance across channels.',
      approach: 'Created modular widget system with D3.js charts and WebSocket for live updates.',
      solution: 'Built a drag-and-drop dashboard with 20+ customizable widgets and real-time data.',
      lessons: 'Component composition and lazy loading are crucial for complex data visualizations.',
    },
  },
];

const filters: { value: ProjectType; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'full-stack', label: 'Full-Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'open-source', label: 'Open Source' },
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
    <section id="projects" className="py-16 lg:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              data-testid={`button-filter-${filter.value}`}
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium flex items-center gap-1">
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.summary}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
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
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-muted rounded-lg">
                        <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-sm">1</span>
                        Problem
                      </h4>
                      <p className="text-muted-foreground pl-8">{selectedProject.caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-chart-4/20 text-chart-4 flex items-center justify-center text-sm">2</span>
                        Approach
                      </h4>
                      <p className="text-muted-foreground pl-8">{selectedProject.caseStudy.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-sm">3</span>
                        Solution
                      </h4>
                      <p className="text-muted-foreground pl-8">{selectedProject.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">4</span>
                        Lessons Learned
                      </h4>
                      <p className="text-muted-foreground pl-8">{selectedProject.caseStudy.lessons}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild className="flex-1">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
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
