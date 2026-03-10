import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917904645966?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Adeeran%20Home%20Care%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppButton;
