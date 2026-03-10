import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaUserNurse, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const statsData = [
  { label: 'Happy Patients', target: 2000, suffix: '+', icon: FaUsers },
  { label: 'Trained Nurses', target: 100, suffix: '+', icon: FaUserNurse },
  { label: 'Years Experience', target: 10, suffix: '+', icon: FaCalendarAlt },
  { label: 'Cities Covered', target: 3, suffix: '', icon: FaMapMarkerAlt },
];

const Counter = ({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const AnimatedCounter = () => {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-8 shadow-xl md:grid-cols-4 md:gap-8">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
