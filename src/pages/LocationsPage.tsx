import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SectionReveal from '@/components/SectionReveal';

const locations = [
  {
    city: 'Chennai',
    desc: 'Comprehensive home healthcare services across Chennai metropolitan area including all major neighborhoods and suburbs.',
    address: 'Chennai, Tamil Nadu',
  },
  {
    city: 'Pondicherry',
    desc: 'Professional nursing and home care services in Pondicherry and surrounding areas with dedicated healthcare teams.',
    address: 'Pondicherry, India',
  },
  {
    city: 'Villupuram',
    desc: 'Our headquarters location serving Villupuram district with complete home healthcare solutions.',
    address: 'No 9 Gurusamy Pillai Street, Opposite Railway Junction, Villupuram',
  },
];

const LocationsPage = () => {
  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary-foreground lg:text-5xl">
            Our Locations
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Serving families across Tamil Nadu with professional home healthcare.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc, i) => (
              <SectionReveal key={loc.city} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
                  {/* Map placeholder */}
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="mx-auto h-8 w-8 text-primary mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">{loc.city}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-card-foreground font-display">{loc.city}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{loc.desc}</p>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FaMapMarkerAlt className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {loc.address}
                    </p>
                    <a href="tel:9894550428" className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                      <FaPhoneAlt className="h-3.5 w-3.5" /> Call for Service
                    </a>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsPage;
