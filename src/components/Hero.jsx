"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative mt-8 py-20 lg:py-32 bg-gradient-to-br from-card to-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      
      {/* Animated Heading */}
      <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl opacity-0 animate-fadeInUp">
        Timeless Luxury in Every Stone{" "}
        <span className="text-primary">Saudi Arabia</span>
      </h1>

      {/* Animated Subheading */}
      <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground opacity-0 animate-fadeInUp delay-200">
        Delivering premium marble, granite, and industrial solutions for iconic projects across KSA & GCC
      </p>

      <div className="flex flex-row sm:flex-row items-center justify-center gap-4 mt-6 opacity-0 animate-fadeInUp delay-400">
        <button
          className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-black/90 transition cursor-pointer"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Us
        </button>

        <button
          className="px-6 py-3 rounded-xl border border-black text-black font-medium hover:bg-black hover:text-white transition cursor-pointer"
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Our Services
        </button>
      </div>

    </div>
  </div>

  <style jsx>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out forwards;
    }
    .delay-200 {
      animation-delay: 0.2s;
    }
    .delay-400 {
      animation-delay: 0.4s;
    }
  `}</style>
</section>

  );
};

export default Hero;
