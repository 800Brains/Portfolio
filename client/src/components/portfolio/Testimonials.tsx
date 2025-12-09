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
    quote: "Alex is one of the most talented engineers I've worked with. His ability to translate complex requirements into elegant solutions is exceptional. He delivered our project ahead of schedule with impeccable quality.",
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechStartup Inc.',
    initials: 'SC',
  },
  {
    id: 2,
    quote: "Working with Alex was a game-changer for our team. His expertise in React and Node.js helped us rebuild our platform from the ground up. The new system is 3x faster and our users love it.",
    author: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'Digital Solutions',
    initials: 'MR',
  },
  {
    id: 3,
    quote: "Alex's attention to detail and commitment to best practices is remarkable. He not only delivered excellent code but also mentored our junior developers. A true team player and technical leader.",
    author: 'Emily Watson',
    role: 'Engineering Lead',
    company: 'Enterprise Corp',
    initials: 'EW',
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
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">What People Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative">
              <CardContent className="p-8 lg:p-12">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                <div className="text-center">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg lg:text-xl leading-relaxed mb-8 relative z-10"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                  <motion.div
                    key={`author-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              data-testid="button-testimonial-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
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
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
