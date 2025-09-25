"use client";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { CheckCircle } from "lucide-react";

// Values data with public folder image paths
const values = [
  { title: "Reliability", description: "Consistent performance in every engagement with our clients", image: "/images/value1.jpg" },
  { title: "Quality", description: "Commitment to the highest standards in all our products and services", image: "/images/value2.jpeg" },
  { title: "Client Focus", description: "Building long-term partnerships through tailored solutions", image: "/images/value3.jpeg" },
  { title: "Vision 2030", description: "Contributing to Saudi Arabia's economic diversification goals", image: "/images/value4.jpeg" }
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-light text-black tracking-tight">
            Core Values
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-light leading-relaxed">
            The principles that guide everything we do at LUXE STONE
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden rounded-3xl shadow-lg border-0 group h-[400px] md:h-[450px] lg:h-[500px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${value.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative flex flex-col items-center justify-end text-center h-full p-6">
                <div className="flex flex-col flex-grow justify-end">
                  <CardHeader className="p-0">
                    <CardTitle className="text-white text-lg font-bold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-gray-200 text-sm">{value.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 text-center px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Why Choose LUXE STONE?
          </h3>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl text-left">
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-3 h-6 w-6 text-primary mt-1" />
              <span className="text-foreground text-sm sm:text-base">
                Multi-Sector Expertise – From construction to chemicals
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-3 h-6 w-6 text-primary mt-1" />
              <span className="text-foreground text-sm sm:text-base">
                Global Backing – International network support
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-3 h-6 w-6 text-primary mt-1" />
              <span className="text-foreground text-sm sm:text-base">
                Commitment to Vision 2030 – Economic diversification
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-3 h-6 w-6 text-primary mt-1" />
              <span className="text-foreground text-sm sm:text-base">
                Quality & Reliability – Highest standards in all projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
