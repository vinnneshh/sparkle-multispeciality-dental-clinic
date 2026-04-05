/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ShieldCheck, 
  UserCheck, 
  Sparkles,
  Stethoscope,
  HeartPulse,
  Baby,
  Smile,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

// --- Data ---
const SERVICES: Service[] = [
  { title: "Root Canal Treatment", description: "Advanced painless endodontic procedures to save your natural teeth.", icon: <Stethoscope className="w-6 h-6" /> },
  { title: "Dental Implants", description: "Permanent, natural-looking tooth replacement solutions for a complete smile.", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Ortho Treatment", description: "Braces and aligners to correct misalignments for all age groups.", icon: <Smile className="w-6 h-6" /> },
  { title: "Kids Dental Care", description: "Specialized, gentle pediatric dentistry in a comfortable environment.", icon: <Baby className="w-6 h-6" /> },
  { title: "Smile Designing", description: "Cosmetic enhancements including veneers and whitening for a perfect smile.", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Wisdom Tooth Surgery", description: "Expert surgical extractions with minimal discomfort and quick recovery.", icon: <HeartPulse className="w-6 h-6" /> },
  { title: "Pregnancy Special Dental Care", description: "Safe and specialized oral health management for expecting mothers.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Old Age Special Care", description: "Comprehensive geriatric dentistry including complete dentures and flap surgery.", icon: <UserCheck className="w-6 h-6" /> },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Surendar Chidirala",
    role: "Parent",
    content: "I'm delighted to share my positive experience with Dr. K Sunanda Reddy. Her expertise and gentle approach made my child's dental visit a breeze. She effectively communicated with both me and my kid, fostering a comfortable environment.",
    rating: 5
  },
  {
    name: "Prerna Bhati",
    role: "Patient",
    content: "Good ambiance, Great experience! Before vs after results were fully satisfied my treatment. I had my extraction done and procedure was painless. Right from the beginning Dr. Sunanda Reddy was supportive.",
    rating: 5
  },
  {
    name: "Ravi Teja",
    role: "Local Guide",
    content: "I had a great experience at the dental clinic for a general clean up. Dr. Sunanda Reddy and her assistant were highly professional and attentive. They ensured my comfort and addressed all my concerns with care.",
    rating: 5
  }
];

const OPENING_HOURS = [
  { day: "Mon - Sat", morning: "10:00 AM – 02:00 PM", evening: "04:30 PM – 08:30 PM" },
  { day: "Sunday", morning: "10:00 AM – 02:00 PM", evening: "04:30 PM – 08:30 PM" }
];

const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/d/1AzocOhgtytUtmKkedyS2AA2EQ4kk5Ad7",
  "https://lh3.googleusercontent.com/d/1NsWR3CvkMZnY2wQcLiP0S-KHAkMiXcpb",
  "https://lh3.googleusercontent.com/d/1OleFcmyb_BqzR0AnYKzVO-MRwugQDDAc",
  "https://lh3.googleusercontent.com/d/1tLCMIKd09Otqx8-svgzY3I_zAtAQMrbi"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Now', href: '#appointment' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1mrUjae0GrHGImnEbpAYPnwWk6wgRMaGo" 
              alt="Sparkle Dental Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className={`font-bold text-xl tracking-tight text-gray-900`}>
            Sparkle <span className="text-purple-600">Dental</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:9494924895" 
            className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100 active:scale-95"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:9494924895" 
              className="bg-purple-600 text-white text-center py-4 rounded-xl font-bold"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Suchitra, Quthbullapur</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Your Smile Deserves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Expert Care.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Experience world-class multispeciality dental care at Sparkle Clinic. From routine checkups to advanced implants, we ensure a painless and comfortable journey for your entire family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://maps.app.goo.gl/CKtGXgMevycAPpHu9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 group"
            >
              Visit Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg hover:border-purple-200 hover:bg-purple-50 transition-all"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm font-medium text-gray-500">Trusted by 2000+ local patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/dental-clinic/800/1000" 
              alt="Modern Dental Clinic" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp Support</p>
              <p className="text-lg font-bold text-gray-900">+91 94949 24895</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Dental Solutions</h3>
          <p className="text-gray-600 text-lg">We provide a full spectrum of dental services using state-of-the-art technology to ensure precision and patient comfort.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all group flex flex-col"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <a 
                href="#appointment" 
                className="inline-flex items-center gap-2 text-purple-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Book Now <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://lh3.googleusercontent.com/d/16bGalsUeCQEEQ03raBN1_9m7cQbyAorR" 
              alt="Dr. Sunanda Reddy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600 rounded-full flex flex-col items-center justify-center text-white z-20 shadow-xl">
            <span className="text-2xl font-bold">10+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Years Exp</span>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-2xl" />
        </div>

        <div>
          <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4">About the Clinic</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Led by Expertise, <br />
            Driven by Care.
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Sparkle Multispeciality Dental Clinic is a premier dental healthcare provider in Hyderabad. Led by <strong>Dr. K Sunanda Reddy</strong>, our clinic is dedicated to providing personalized dental care that combines clinical excellence with a gentle, patient-centric approach.
          </p>
          
          <div className="space-y-6 mb-10">
            {[
              "State-of-the-art diagnostic & treatment equipment",
              "Strict sterilization and hygiene protocols",
              "Specialized care for children, pregnant women, and seniors",
              "Painless treatment procedures for maximum comfort"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a 
            href="tel:9494924895"
            className="inline-flex items-center gap-3 text-purple-600 font-bold text-lg hover:gap-5 transition-all"
          >
            Schedule a Consultation <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Inside Sparkle Dental</h3>
          <p className="text-gray-600 text-lg">Take a look at our modern facility and successful treatments that have brought smiles to many.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg group"
            >
              <img 
                src={img} 
                alt={`Gallery Image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold text-lg">Sparkle Dental Clinic</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-purple-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-purple-300 font-bold tracking-widest uppercase text-sm mb-4">Patient Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/10 relative"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic text-purple-50 mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-purple-300 text-xs uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-50 rounded-[48px] p-8 md:p-16 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="8008746144"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Interested In</label>
              <select 
                required
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
              <textarea 
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Request Appointment'}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-600 font-bold">Thank you! We will contact you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-600 font-bold">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/appointments')
      .then(res => res.json())
      .then(data => {
        setAppointments(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <button 
            onClick={onLogout}
            className="bg-red-50 text-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-100 transition-all"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-8 py-6 font-bold text-gray-400 uppercase text-xs tracking-wider">Patient</th>
                  <th className="px-8 py-6 font-bold text-gray-400 uppercase text-xs tracking-wider">Contact</th>
                  <th className="px-8 py-6 font-bold text-gray-400 uppercase text-xs tracking-wider">Service</th>
                  <th className="px-8 py-6 font-bold text-gray-400 uppercase text-xs tracking-wider">Date</th>
                  <th className="px-8 py-6 font-bold text-gray-400 uppercase text-xs tracking-wider">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr><td colSpan={5} className="px-8 py-12 text-center text-gray-500">Loading appointments...</td></tr>
                ) : appointments.length === 0 ? (
                  <tr><td colSpan={5} className="px-8 py-12 text-center text-gray-500">No appointments found.</td></tr>
                ) : appointments.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">{app.name}</td>
                    <td className="px-8 py-6 text-gray-600">{app.phone}</td>
                    <td className="px-8 py-6">
                      <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                        {app.service}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-gray-500 text-sm">{app.date}</td>
                    <td className="px-8 py-6 text-gray-500 text-sm max-w-xs truncate">{app.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-6">
      <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-purple-100 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Username</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
          <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold hover:bg-purple-700 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[60px] overflow-hidden shadow-3xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Visit Our Clinic</h2>
            <p className="text-gray-400 text-lg mb-12">We are conveniently located in Suchitra, Hyderabad. Walk in or book your slot today.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Quthbullapur Main Rd, opposite to three temples, beside Bhaskar medicals, Suchitra, Godavari Homes, Hyderabad, 500067
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  {OPENING_HOURS.map((h, i) => (
                    <p key={i} className="text-gray-400 text-sm">
                      <span className="font-bold text-white">{h.day}:</span> {h.morning} & {h.evening}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Contact</h4>
                  <p className="text-gray-400">+91 94949 24895</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="tel:9494924895" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="https://wa.me/919494924895" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.81053158917!2d78.4614343!3d17.5165181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb904677777777%3A0x7777777777777777!2sSparkle%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full grayscale invert opacity-80"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1mrUjae0GrHGImnEbpAYPnwWk6wgRMaGo" 
                  alt="Sparkle Dental Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Sparkle <span className="text-purple-600">Dental</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Providing multispeciality dental care with a focus on patient comfort, advanced technology, and lasting results. Your smile is our priority.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-purple-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-purple-600 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-purple-600 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-purple-600 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a></li>
              <li><button onClick={() => window.location.hash = '#admin'} className="hover:text-purple-600 transition-colors">Admin Login</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
                <span>Quthbullapur, Hyderabad</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-purple-600 shrink-0" />
                <span>+91 94949 24895</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-purple-600 shrink-0" />
                <span>WhatsApp Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sparkle Multispeciality Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState<'site' | 'admin'>('site');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') {
        setView('admin');
      } else {
        setView('site');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (view === 'admin') {
    if (!isAdmin) {
      return <AdminLogin onLogin={() => setIsAdmin(true)} />;
    }
    return <AdminDashboard onLogout={() => { setIsAdmin(false); window.location.hash = '#home'; }} />;
  }

  return (
    <div className="font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
        <a 
          href="https://wa.me/919494924895" 
          className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a 
          href="tel:9494924895" 
          className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
