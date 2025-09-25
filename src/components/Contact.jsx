import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);

    emailjs
      .send(
        "service_yxvymbh", // EmailJS Service ID
        "template_hkfaws3", // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "luxestone@luxstoneco.com", // Client email
        },
        "yZTY4CWzZz7i8VIrq" // EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Email send error:", error);
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Head Office - Saudi Arabia",
      desc: "Jeddah, Kingdom of Saudi Arabia",
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Phone Numbers",
      desc: (
        <div className="space-y-1">
          <p>+966 537136925</p>
          <p>+966 54 5353076</p>
        </div>
      ),
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email",
      desc: "luxestone@luxstoneco.com",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Website",
      desc: "www.luxstoneco.com",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      id="contact"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-1/2 border-b mx-auto rounded-full"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Ready to bring your vision to life? Let's start a conversation about
            your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <div className="xl:col-span-2 space-y-6">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gray-100 shadow-md">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-3">
            <div className="relative p-8 rounded-3xl bg-white shadow-lg border border-gray-100">
              {/* Success State */}
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-3xl z-20 transition-opacity duration-500">
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Send us a Message
                </h3>
                <p className="text-gray-600 text-base">
                  Tell us about your project and we'll create something amazing
                  together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-xl border-2 border-black text-black font-medium bg-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
