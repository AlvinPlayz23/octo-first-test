"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, ShoppingCart, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-shoe-gradient pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-64 h-64 bg-shoe-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[25%] right-[10%] w-72 h-72 bg-shoe-dark-brown rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[15%] w-56 h-56 bg-shoe-cream rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Step Into <span className="text-shoe-accent">Style</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our premium collection of handcrafted shoes designed for comfort and style. 
            Elevate your footwear game with Kowla-Shores.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary px-8 py-4 text-lg">
              Shop Collection
            </button>
            <button className="bg-transparent border-2 border-foreground text-foreground px-8 py-4 text-lg rounded-full font-medium hover:bg-foreground hover:text-background transition-colors">
              Explore Styles
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm text-foreground/60 mb-2">Discover More</span>
        <ChevronDown className="w-6 h-6 text-foreground/60 animate-bounce" />
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-foreground/10 shoe-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-shoe-accent">Kowla-Shores</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We combine premium materials, expert craftsmanship, and innovative design to create shoes that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShoppingCart className="w-8 h-8 text-background" />} 
            title="Premium Quality" 
            description="Crafted with the finest materials for durability and comfort that lasts." 
            delay={0.1}
          />
          <FeatureCard 
            icon={<Star className="w-8 h-8 text-background" />} 
            title="Expert Design" 
            description="Fashion-forward designs that keep you ahead of the style curve." 
            delay={0.2}
          />
          <FeatureCard 
            icon={<User className="w-8 h-8 text-background" />} 
            title="Perfect Fit" 
            description="Engineered for optimal comfort with ergonomic support." 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, price, image, rating }: { 
  name: string; 
  price: string; 
  image: string; 
  rating: number;
}) => {
  return (
    <motion.div
      className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow shoe-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
          <span className="text-gray-500">{image}</span>
        </div>
        <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 rounded-full text-sm font-medium">
          {rating} ★
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-shoe-accent font-semibold text-lg mb-4">{price}</p>
        <button className="w-full btn-primary py-3">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-20 bg-shoe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-shoe-accent">Collections</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our most popular styles designed for every occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCard 
            name="Classic Leather Oxford" 
            price="$129.99" 
            image="Oxford Shoe" 
            rating={4.8}
          />
          <ProductCard 
            name="Modern Sneaker Pro" 
            price="$99.99" 
            image="Sneaker" 
            rating={4.7}
          />
          <ProductCard 
            name="Premium Running Shoe" 
            price="$149.99" 
            image="Running Shoe" 
            rating={4.9}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role }: { 
  quote: string; 
  author: string; 
  role: string;
}) => {
  return (
    <motion.div
      className="bg-background p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-shoe-accent text-5xl mb-4">"</div>
      <p className="text-lg text-foreground mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div className="ml-4">
          <p className="font-bold text-foreground">{author}</p>
          <p className="text-foreground/70">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-shoe-accent">Customers</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="The comfort and style of Kowla-Shores shoes are unmatched. I've never worn anything like them!" 
            author="Alex Johnson" 
            role="Fashion Enthusiast" 
          />
          <TestimonialCard 
            quote="Perfect fit and amazing quality. These shoes have become my go-to for everything from work to weekend." 
            author="Maria Garcia" 
            role="Professional" 
          />
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-accent-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold text-background mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Elevate Your Style?
        </motion.h2>
        <motion.p 
          className="text-xl text-background/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied customers and step into comfort and style with Kowla-Shores.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-background text-foreground px-8 py-4 text-lg rounded-full font-bold hover:bg-foreground hover:text-background transition-colors">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kowla-Shores</h3>
            <p className="text-background/70">Premium footwear for the modern lifestyle.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background">Men's Shoes</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Women's Shoes</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">New Arrivals</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Shipping Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Returns</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background">Instagram</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Twitter</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Facebook</a></li>
              <li><a href="#" className="text-background/70 hover:text-background">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>© {new Date().getFullYear()} Kowla-Shores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
