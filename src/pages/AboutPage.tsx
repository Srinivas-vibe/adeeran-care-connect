import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaEye, FaUserMd, FaHeart, FaClock, FaHome, FaShieldAlt } from 'react-icons/fa';
import SectionReveal from '@/components/SectionReveal';
import elderlyCare from '@/assets/elderly-care.jpg';

const values = [
  { icon: FaUserMd, title: 'Experienced Nurses', desc: 'Our team consists of highly trained and certified nursing professionals.' },
  { icon: FaHeart, title: 'Compassionate Caregivers', desc: 'We treat every patient with empathy, dignity, and personalized attention.' },
  { icon: FaClock, title: '24/7 Support', desc: 'Our healthcare team is available around the clock for any medical emergency.' },
  { icon: FaHome, title: 'Home Based Medical Care', desc: 'Receive hospital-quality medical care in the comfort of your home.' },
  { icon: FaShieldAlt, title: 'Trusted Healthcare', desc: 'Trusted by thousands of families across Chennai, Pondicherry and Villupuram.' },
  { icon: FaCheckCircle, title: 'Quality Assurance', desc: 'We maintain the highest standards of medical care and patient safety.' },
];

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary-foreground lg:text-5xl"
          >
            About Adeeran Home Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-primary-foreground/80"
          >
            Providing compassionate, professional home healthcare services to families across Tamil Nadu.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <img src={elderlyCare} alt="Compassionate elderly care at home" className="rounded-2xl shadow-xl" loading="lazy" />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Who We Are</span>
              <h2 className="mb-4 text-3xl font-bold text-foreground font-display">Dedicated to Your Health & Comfort</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Adeeran Home Care is a leading provider of professional home healthcare services in Chennai, Pondicherry, and Villupuram. We are committed to delivering high-quality medical care right at your doorstep, ensuring patients receive the best treatment in the comfort of their homes.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our team of experienced nurses, caregivers, and healthcare professionals are dedicated to providing personalized care plans tailored to each patient's unique needs. From post-surgical recovery to elderly care and specialized medical services, we cover a comprehensive range of healthcare needs.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-section-alt py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <SectionReveal>
              <div className="rounded-xl bg-card p-8 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FaBullseye className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground font-display">Our Mission</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To provide accessible, affordable, and high-quality home healthcare services that empower patients to recover and thrive in the comfort of their homes, while supporting families with compassionate professional medical care.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="rounded-xl bg-card p-8 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <FaEye className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground font-display">Our Vision</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted and preferred home healthcare provider in Tamil Nadu, setting new standards in home-based medical care through innovation, expertise, and unwavering commitment to patient wellbeing.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">What Sets Us Apart</h2>
            </div>
          </SectionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-xl bg-card p-6 shadow-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-card-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
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

export default AboutPage;
