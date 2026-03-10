import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Service } from '@/data/services';

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-card-foreground font-display">{service.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <Link
        to={`/services#${service.id}`}
        className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
