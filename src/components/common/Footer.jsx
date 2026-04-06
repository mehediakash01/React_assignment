import { Link } from 'react-router-dom';
import { Share2, Code, Heart, Eye, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Kodawave
            </h3>
            <p className="text-gray-400">
              Transform your digital presence with cutting-edge solutions for growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">SEO</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Online Advertising</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Booking Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span>hello@kodawave.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; 2024 Kodawave. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Code size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Heart size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Eye size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
