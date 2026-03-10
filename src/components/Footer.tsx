import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/locations', label: 'Locations' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
  { to: '/book-service', label: 'Book Service' },
];

const topServices = [
  'Nurse Care Service', 'Elderly Care Service', 'Baby Care Service',
  'ICU Patient Care', 'Palliative Care', '24 Hours Nursing',
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-4 [&_span]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/60 [&_img]:brightness-200" />
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Trusted home healthcare services in Chennai, Pondicherry and Villupuram. Professional nursing care at your doorstep.
            </p>
            <div className="mt-4 flex gap-3">
              {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Our Services</h4>
            <ul className="space-y-2">
              {topServices.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-accent" />
                No 9 Gurusamy Pillai Street, Opposite Railway Junction, Villupuram
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="h-3.5 w-3.5 text-accent" />
                <a href="tel:9894550428">9894550428</a> / <a href="tel:8925328113">8925328113</a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 text-accent" />
                <a href="https://wa.me/917904645966" target="_blank" rel="noopener noreferrer">7904645966</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <p className="text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Adeeran Home Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
