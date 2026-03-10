import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import SectionReveal from '@/components/SectionReveal';
import { services } from '@/data/services';

const BookServicePage = () => {
  const [form, setForm] = useState({
    name: '', service: '', phone: '', location: '', time: '', message: '',
  });
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
            Book a Service
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Fill in the form below and our team will get back to you promptly.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SectionReveal>
              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                {submitted ? (
                  <div className="rounded-lg bg-secondary/10 p-12 text-center">
                    <FaCheckCircle className="mx-auto mb-4 h-14 w-14 text-secondary" />
                    <h2 className="mb-2 text-2xl font-bold text-card-foreground font-display">Service Request Received!</h2>
                    <p className="text-muted-foreground">Our team will contact you shortly to confirm your appointment. Thank you for choosing Adeeran Home Care.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Patient Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Enter patient name" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Service Needed *</label>
                      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="12 Hours Nursing">12 Hours Nursing</option>
                        <option value="24 Hours Nursing">24 Hours Nursing</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Enter phone number" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Location *</label>
                      <select required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring">
                        <option value="">Select location</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pondicherry">Pondicherry</option>
                        <option value="Villupuram">Villupuram</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Preferred Time</label>
                      <input type="text" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="e.g., Morning, Afternoon, Evening" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-card-foreground">Message</label>
                      <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Any additional details about the patient or requirements" />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]">
                      Submit Service Request
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

export default BookServicePage;
