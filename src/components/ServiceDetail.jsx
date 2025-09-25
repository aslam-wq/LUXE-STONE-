import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Clock, Shield, Award, Truck } from "lucide-react";

const SERVICE_DATA = {
  1: {
    title: "Marble & Granite",
    category: "Stone Processing",
    description:
      "Premium marble and granite solutions for architectural and construction projects",
    image: "/images/services1.jpg",
    features: [
      "Imported and locally processed marble & granite",
      "Custom finishes & cut-to-size products",
      "Supply for mega projects across KSA & GCC",
    ],
    promises: [
      "Superior stone quality & finishing",
      "Direct sourcing from global quarries",
      "Cutting-edge processing facilities in KSA",
      "Reliable supply for mega projects",
    ],
    qualityNote:
      "All products undergo strict quality control to ensure durability and elegance for every project.",
    icon: Award,
  },
  2: {
    title: "General Contracting",
    category: "Construction Services",
    description:
      "End-to-end contracting solutions with focus on quality, safety, and timely execution",
    image: "/images/services2.jpg",
    services: [
      "Construction of large-scale projects",
      "Operations & Maintenance for facilities",
      "Project management tailored to client needs",
    ],
    commitment:
      "LUXE STONE Company stands committed to delivering world-class quality, safety, and performance across every project.",
    icon: Shield,
  },
  3: {
    title: "Industrial Chemicals",
    category: "Manufacturing & Trading",
    description:
      "Advanced manufacturing and trading of industrial chemicals meeting international standards",
    image: "/images/services3.jpg",
    industries: [
      "Construction & Infrastructure",
      "Manufacturing & Engineering",
      "Oil & Gas",
      "Water & Wastewater Treatment",
    ],
    commitment:
      "Committed to delivering high-quality, sustainable, and reliable chemical solutions.",
    qualities: ["Efficient supply chains", "Strict quality control", "Sustainable practices"],
    icon: Clock,
  },
  4: {
    title: "General Trading",
    category: "Logistics & Supply",
    description:
      "Comprehensive trading solutions with robust logistics network and market expertise",
    image: "/images/services4.jpg",
    products: ["Building materials", "Industrial supplies", "Consumer goods"],
    advantage:
      "This flexibility allows us to serve as a trusted sourcing partner for diverse business needs.",
    icon: Truck,
  },
};

const ServiceNotFound = () => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
    <p className="text-gray-600 mb-8">
      The service you're looking for doesn't exist.
    </p>
    <Link
      to="/services"
      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
    >
      <ChevronLeft className="w-4 h-4" />
      Back to Services
    </Link>
  </div>
);

const FeatureList = ({ title, items, icon: Icon }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-black" />
      <h3 className="text-xl font-semibold text-black">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICE_DATA[id];

  if (!service) return <ServiceNotFound />;

  const {
    title,
    category,
    description,
    image,
    features,
    promises,
    services,
    industries,
    products,
    qualityNote,
    commitment,
    qualities,
    advantage,
    icon: ServiceIcon,
  } = service;

  return (
    <main className="container mx-auto px-4 py-20 bg-white text-black">
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link to="/services" className="hover:text-black transition-colors">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-black" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      <article className="flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-xl overflow-hidden shadow-xl group">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ServiceIcon className="w-8 h-8 text-black" />
              <h1 className="text-4xl font-bold text-black">{title}</h1>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed">{description}</p>
          </header>

          <div className="space-y-8">
            {features && <FeatureList title="Our Offerings" items={features} icon={Award} />}
            {promises && <FeatureList title="Our Promise" items={promises} icon={Shield} />}
            {services && <FeatureList title="Services Offered" items={services} icon={Truck} />}
            {industries && <FeatureList title="Industries We Serve" items={industries} icon={Clock} />}
            {products && <FeatureList title="Product Range" items={products} icon={Truck} />}
            {qualities && <FeatureList title="Our Strengths" items={qualities} icon={Award} />}
            {qualityNote && (
              <div className="bg-gray-100 border-l-4 border-black p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Quality Assurance:</strong> {qualityNote}
                </p>
              </div>
            )}
            {commitment && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-3">Our Commitment</h3>
                <p className="text-gray-700">{commitment}</p>
              </div>
            )}
            {advantage && (
              <div className="bg-gray-100 border border-black p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Competitive Advantage:</strong> {advantage}
                </p>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
