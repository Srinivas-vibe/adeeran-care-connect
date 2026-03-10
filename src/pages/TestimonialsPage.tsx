import { motion } from 'framer-motion';
import GoogleReviewCard from '@/components/GoogleReviewCard';
import SectionReveal from '@/components/SectionReveal';

const testimonials = [
  { name: 'Ramesh Kumar', text: 'Adeeran Home Care provided excellent nursing support for my father. The nurses were professional, punctual, and very caring. Highly recommended!', rating: 5, location: 'Chennai', timeAgo: '2 weeks ago' },
  { name: 'Priya Sundarajan', text: 'The baby care service was outstanding! The nurse was very experienced and helped us tremendously during the first month after delivery. Thank you, Adeeran!', rating: 5, location: 'Pondicherry', timeAgo: '1 month ago' },
  { name: 'Anand Murugan', text: 'ICU home care service was a lifesaver. Professional setup, monitoring equipment, and trained nurses made my mother\'s recovery smooth and comfortable.', rating: 5, location: 'Villupuram', timeAgo: '3 weeks ago' },
  { name: 'Lakshmi Venkat', text: 'We needed 24-hour nursing care for my grandmother. Adeeran provided dedicated nurses who treated her like their own family. Exceptional service!', rating: 5, location: 'Chennai', timeAgo: '1 month ago' },
  { name: 'Suresh Rajan', text: 'The physiotherapy sessions at home were very convenient. The therapist was knowledgeable and helped my father recover from his knee surgery.', rating: 5, location: 'Pondicherry', timeAgo: '2 months ago' },
  { name: 'Meena Devi', text: 'Palliative care from Adeeran was compassionate and dignified. The team supported our family through a very difficult time with grace and professionalism.', rating: 5, location: 'Villupuram', timeAgo: '6 weeks ago' },
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
              <GoogleReviewCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
