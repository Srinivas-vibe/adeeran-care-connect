import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  location: string;
  index: number;
}

const TestimonialCard = ({ name, text, rating, location, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card p-6 shadow-card"
    >
      <div className="mb-3 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="h-4 w-4 text-accent" />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground italic">"{text}"</p>
      <div>
        <p className="text-sm font-semibold text-card-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
