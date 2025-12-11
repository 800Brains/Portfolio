import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, Github, Linkedin, AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '32975080-9d83-4ed2-8531-c63c402a542e',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'obiagwusomtochukwu27@gmail.com', href: 'mailto:obiagwusomtochukwu27@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+234-901-252-1692', href: 'tel:+2349012521692' },
    { icon: MapPin, label: 'Location', value: 'Canada', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/800Brains' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/obiagwu-somtochukwu-50b316233' },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-card/50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 px-2">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-3 sm:px-4">
            Have a project or opportunity? Let&apos;s discuss how I can contribute to your team or initiative.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8 md:py-10 lg:py-12"
                  >
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-chart-2 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground px-2 sm:px-4">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 sm:mt-6"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                    {error && (
                      <div className="flex items-start gap-2 p-2 sm:p-3 rounded-lg bg-destructive/10 text-destructive">
                        <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                        <p className="text-xs">{error}</p>
                      </div>
                    )}
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="input-name"
                        className="text-xs sm:text-sm h-9 sm:h-10"
                      />
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-email"
                        className="text-xs sm:text-sm h-9 sm:h-10"
                      />
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="subject" className="text-xs sm:text-sm">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        data-testid="input-subject"
                        className="text-xs sm:text-sm h-9 sm:h-10"
                      />
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="message" className="text-xs sm:text-sm">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        data-testid="input-message"
                        className="text-xs sm:text-sm resize-none min-h-[80px] sm:min-h-[100px]"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full h-9 sm:h-10 text-xs sm:text-sm"
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            {/* Contact Details */}
            <div className="space-y-2 sm:space-y-3">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm font-medium hover:text-primary transition-colors block truncate"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-3 sm:pt-4 md:pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 sm:mb-3">Connect with me</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid={`link-social-${link.label.toLowerCase().replace(' ', '-')}`}
                    className="text-xs h-8"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-3 h-3 mr-1.5" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <Card>
              <CardContent className="p-3 sm:p-4 md:p-6">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-2">Areas of Interest</h3>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>• Network Infrastructure & Security</p>
                  <p>• Full-Stack Web Development</p>
                  <p>• Cybersecurity & Threat Analysis</p>
                  <p>• IT Support & Administration</p>
                  <p>• Software Engineering Projects</p>
                </div>
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card>
              <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2">Need my resume?</h3>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-3 md:mb-4">
                  Download my full CV with detailed experience.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  data-testid="button-download-cv-contact" 
                  asChild
                  className="w-full text-xs h-8 sm:h-9"
                >
                  <a href="/Somto_Obiagwu_CV.pdf" download="Somtochukwu_Obiagwu_CV.pdf">
                    <Download className="w-3 h-3 mr-1.5" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}