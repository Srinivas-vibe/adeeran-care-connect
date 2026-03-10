import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import SectionReveal from '@/components/SectionReveal';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary-foreground lg:text-5xl">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Get in touch with our healthcare team today.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <SectionReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground font-display">Get In Touch</h2>
                <p className="text-muted-foreground">Reach out to us for any healthcare needs. Our team is ready to help you.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg bg-card p-4 shadow-card">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Address</h4>
                      <p className="text-sm text-muted-foreground">No 9 Gurusamy Pillai Street, Opposite Railway Junction, Villupuram</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg bg-card p-4 shadow-card">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FaPhoneAlt className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Phone</h4>
                      <div className="space-y-1">
                        <a href="tel:9894550428" className="block text-sm text-primary hover:underline">9894550428</a>
                        <a href="tel:8925328113" className="block text-sm text-primary hover:underline">8925328113</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg bg-card p-4 shadow-card">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                      <FaWhatsapp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">WhatsApp</h4>
                      <a href="https://wa.me/917904645966" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">7904645966</a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="tel:9894550428" className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a href="https://wa.me/917904645966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 h-64 rounded-xl bg-muted flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Google Maps – Villupuram</p>
                </div>
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <h2 className="mb-6 text-2xl font-bold text-card-foreground font-display">Send a Message</h2>
                {submitted ? (
                  <div className="rounded-lg bg-secondary/10 p-8 text-center">
                    <FaEnvelope className="mx-auto mb-3 h-10 w-10 text-secondary" />
                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">Thank You!</h3>
                    <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Your Name</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Email</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Phone Number</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Message</label>
                      <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring" />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
