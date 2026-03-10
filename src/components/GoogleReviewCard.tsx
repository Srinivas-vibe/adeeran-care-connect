import { motion } from 'framer-motion';
import { FaStar, FaGoogle } from 'react-icons/fa';

interface GoogleReviewCardProps {
  name: string;
  text: string;
  rating: number;
  location: string;
  timeAgo: string;
  index: number;
}

const GoogleReviewCard = ({ name, text, rating, location, timeAgo, index }: GoogleReviewCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-primary/80', 'bg-secondary/80', 'bg-accent/80'];
  const avatarColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColor}`}>
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-card-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
        </div>
        <FaGoogle className="h-5 w-5 shrink-0 text-muted-foreground/50" />
      </div>

      {/* Rating + Time */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={`h-3.5 w-3.5 ${i < rating ? 'text-accent' : 'text-muted-foreground/20'}`} />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{timeAgo}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </motion.div>
  );
};

export default GoogleReviewCard;
