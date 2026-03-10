import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import type { Service } from '@/data/services';

const ServiceImageCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="mb-2 text-lg font-bold text-accent font-display">{service.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md transition-transform hover:scale-110"
        >
          <FaArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceImageCard;
