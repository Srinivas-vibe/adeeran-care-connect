import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import SectionReveal from '@/components/SectionReveal';

const testimonials = [
  { name: 'Ramesh K.', text: 'Adeeran Home Care provided excellent nursing support for my father. The nurses were professional, punctual, and very caring. Highly recommended!', rating: 5, location: 'Chennai' },
  { name: 'Priya Sundarajan', text: 'The baby care service was outstanding! The nurse was very experienced and helped us tremendously during the first month after delivery. Thank you, Adeeran!', rating: 5, location: 'Pondicherry' },
  { name: 'Anand M.', text: 'ICU home care service was a lifesaver. Professional setup, monitoring equipment, and trained nurses made my mother\'s recovery smooth and comfortable.', rating: 5, location: 'Villupuram' },
  { name: 'Lakshmi V.', text: 'We needed 24-hour nursing care for my grandmother. Adeeran provided dedicated nurses who treated her like their own family. Exceptional service!', rating: 5, location: 'Chennai' },
  { name: 'Suresh R.', text: 'The physiotherapy sessions at home were very convenient. The therapist was knowledgeable and helped my father recover from his knee surgery.', rating: 5, location: 'Pondicherry' },
  { name: 'Meena D.', text: 'Palliative care from Adeeran was compassionate and dignified. The team supported our family through a very difficult time with grace and professionalism.', rating: 5, location: 'Villupuram' },
];

const TestimonialsPage = () => {
  return (
    <>
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary-foreground lg:text-5xl">
            Patient Testimonials
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Hear from families who trust Adeeran Home Care.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
