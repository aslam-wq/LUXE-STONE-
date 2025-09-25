import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-light text-black tracking-tight hover:text-gray-800 transition-colors duration-300">
              LUXE STONE
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 font-light leading-relaxed hover:text-black transition-colors duration-300">
              A trusted partner for premium natural stone solutions in the Kingdom of Saudi Arabia
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Text Side */}
            <div>
              {[
                "LUXE STONE Company, a proud subsidiary of Tourmaline Mining & Export Pvt. Ltd, India, brings world-class expertise in import, export, and processing of marble, granite, and premium stones to the Kingdom of Saudi Arabia.",
                "With a commitment to quality, innovation, and reliability, we deliver natural stone solutions for iconic projects across KSA, GCC, and beyond.",
                "Drawing on the global expertise of our parent company, we have built a reputation for integrity, quality, and performance in serving government entities, developers, and businesses across Saudi Arabia and the wider GCC region."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  variants={fadeInUp}
                  className={`mb-4 leading-relaxed text-foreground hover:text-gray-700 transition-colors duration-300 ${
                    index === 2 ? "hidden lg:block" : ""
                  }`}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <img
                src="/images/about.jpg"  // <-- Updated path for public folder
                alt="LUXE STONE company building with elegant stone facade and modern architecture"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
