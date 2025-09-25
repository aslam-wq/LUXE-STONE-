import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Marble & Granite",
    subtitle: "Premium Natural Stone Solutions",
    description:
      "Import, export and processing of premium marble and granite for architectural and construction projects.",
    image: "/images/services1.jpg",
  },
  {
    id: 2,
    title: "General Contracting",
    subtitle: "End-to-End Construction Solutions",
    description:
      "End-to-end contracting solutions with focus on quality, safety, and timely execution.",
    image: "/images/services2.jpg",
  },
  {
    id: 3,
    title: "Industrial Chemicals",
    subtitle: "Manufacturing & Trading Excellence",
    description:
      "Manufacturing and trading of industrial chemicals that meet international standards.",
    image: "/images/services3.jpg",
  },
  {
    id: 4,
    title: "General Trading",
    subtitle: "Multi-Sector Trading Solutions",
    description:
      "Facilitating smooth flow of goods and services across multiple sectors.",
    image: "/images/services4.jpg",
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-light text-black tracking-tight">
            Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-light leading-relaxed">
            Comprehensive solutions for construction, industry, and trading needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-300 rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light tracking-wide">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-auto flex justify-center">
                  <button
                    className="w-full px-6 py-3 min-h-[48px] rounded-xl border border-black text-black font-medium hover:bg-black hover:text-white transition cursor-pointer flex items-center justify-center"
                    onClick={() => navigate(`/services/${service.id}`)} // must match App.jsx route
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none transition-opacity duration-500 ${
                  hoveredCard === service.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
