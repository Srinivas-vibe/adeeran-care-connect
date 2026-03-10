import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionReveal from '@/components/SectionReveal';
import { services, nursingShifts } from '@/data/services';

const ServicesPage = () => {
  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary-foreground lg:text-5xl">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Comprehensive home healthcare services tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <SectionReveal key={service.id}>
                <div id={service.id} className="scroll-mt-24 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-2 text-xl font-bold text-card-foreground font-display">{service.title}</h2>
                      <p className="mb-4 leading-relaxed text-muted-foreground">{service.description}</p>
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-card-foreground">Key Benefits:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((b) => (
                            <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <FaCheckCircle className="h-3.5 w-3.5 shrink-0 text-secondary" /> {b}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link
                        to="/book-service"
                        className="inline-flex items-center rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
                      >
                        Book Service
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Nursing Shifts */}
      <section className="bg-section-alt py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Nursing Shifts</span>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Flexible Nursing Options</h2>
            </div>
          </SectionReveal>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {nursingShifts.map((shift, i) => (
              <SectionReveal key={shift.title} delay={i * 0.15}>
                <div className="rounded-xl border-2 border-primary/20 bg-card p-8 text-center shadow-card">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FaClock className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground font-display">{shift.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{shift.description}</p>
                  <ul className="space-y-2 text-left">
                    {shift.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FaCheckCircle className="h-3.5 w-3.5 text-secondary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
