import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaClock, FaShieldAlt, FaUserMd } from 'react-icons/fa';
import heroImage from '@/assets/hero-nurse.jpg';
import SectionReveal from '@/components/SectionReveal';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, nursingShifts } from '@/data/services';

const stats = [
  { label: 'Happy Patients', value: '2000+' },
  { label: 'Trained Nurses', value: '100+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Cities Covered', value: '3' },
];

const whyUs = [
  { icon: FaUserMd, title: 'Experienced Nurses', desc: 'Highly qualified and certified healthcare professionals.' },
  { icon: FaShieldAlt, title: 'Trusted Care', desc: 'Compassionate, reliable, and trustworthy service.' },
  { icon: FaClock, title: '24/7 Support', desc: 'Round-the-clock availability for all medical needs.' },
  { icon: FaCheckCircle, title: 'Home Based Care', desc: 'Quality medical care in the comfort of your home.' },
];

const testimonials = [
  { name: 'Ramesh K.', text: 'Adeeran Home Care provided excellent nursing support for my father. The nurses were professional and caring.', rating: 5, location: 'Chennai' },
  { name: 'Priya S.', text: 'Outstanding baby care service! The nurse was very experienced and helped us tremendously during the first month.', rating: 5, location: 'Pondicherry' },
  { name: 'Anand M.', text: 'The ICU home care service saved us so much hassle. Professional setup and monitoring at home.', rating: 5, location: 'Villupuram' },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Trusted Home Healthcare
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl xl:text-6xl">
                Professional Home Nursing & Healthcare Services
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
                Trusted home healthcare services in Chennai, Pondicherry and Villupuram. Expert nursing care delivered to your doorstep with compassion and professionalism.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:9894550428"
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
                >
                  <FaPhoneAlt className="h-4 w-4" /> Call Now
                </a>
                <Link
                  to="/book-service"
                  className="rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
                >
                  Book Service
                </Link>
                <a
                  href="https://wa.me/917904645966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img src={heroImage} alt="Professional home nurse assisting elderly patient" className="h-[480px] w-full object-cover" loading="eager" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <FaCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">100% Trusted</p>
                    <p className="text-xs text-muted-foreground">By 2000+ families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-section-alt py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Comprehensive Home Healthcare</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                We offer a wide range of professional home healthcare services to meet every medical need.
              </p>
            </div>
          </SectionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.slice(0, 12).map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Nursing Shifts */}
      <section className="py-16 lg:py-24">
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

      {/* Why Us */}
      <section className="bg-section-alt py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Why Families Trust Adeeran</h2>
            </div>
          </SectionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl bg-card p-6 text-center shadow-card">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">What Our Patients Say</h2>
            </div>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground lg:text-4xl">Need Home Healthcare?</h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Get professional nursing care at your doorstep. Contact us today for a consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9894550428" className="flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105">
                <FaPhoneAlt /> Call Now
              </a>
              <Link to="/book-service" className="rounded-lg bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105">
                Book Service
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
