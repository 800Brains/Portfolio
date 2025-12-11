import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    quote: "Somtochukwu's technical expertise in network configuration and maintenance has been instrumental to our operations. His proactive approach reduced our network downtime significantly, and his troubleshooting skills are exceptional. He's a reliable professional who goes above and beyond.",
    author: 'Operations Manager',
    role: 'Senior Manager',
    company: 'Somick Rhema',
    initials: 'OM',
  },
  {
    id: 2,
    quote: "During his internship, Somtochukwu demonstrated remarkable aptitude in Java development and software engineering principles. His mobile applications were well-architected with secure coding practices. He's a quick learner who adapts well to team environments.",
    author: 'Technical Lead',
    role: 'Software Development Lead',
    company: 'NIIT Enugu',
    initials: 'TL',
  },
  {
    id: 3,
    quote: "Somtochukwu's dedication to both technology and community service is inspiring. His work organizing healthcare outreach programs while maintaining high technical standards shows his character and leadership abilities. He's someone you can count on.",
    author: 'Program Coordinator',
    role: 'Community Outreach Director',
    company: 'Somick Rhema Foundation',
    initials: 'PC',
  },
  {
    id: 4,
    quote: "As a fellow graduate, I've seen Somtochukwu tackle complex software engineering projects with determination and creativity. His ability to balance network administration with full-stack development demonstrates his versatility and commitment to excellence.",
    author: 'Academic Colleague',
    role: 'Software Engineer',
    company: 'Babcock University Alumni',
    initials: 'AC',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 px-2">
            What People Say
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-3">
            Feedback from colleagues and organizations I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/20 absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6" />
                <div className="text-center">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 relative z-10 px-2 sm:px-4"
                  >
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </motion.p>
                  <motion.div
                    key={`author-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex flex-col items-center gap-2 sm:gap-3"
                  >
                    <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                      <AvatarFallback className="bg-primary text-primary-foreground font-medium text-xs sm:text-sm md:text-base">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              data-testid="button-testimonial-prev"
              aria-label="Previous testimonial"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              data-testid="button-testimonial-next"
              aria-label="Next testimonial"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}