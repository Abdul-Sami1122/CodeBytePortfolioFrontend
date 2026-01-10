import { motion } from "motion/react";
import { Code2, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming ideas into powerful web applications";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Particle effect
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 20 + Math.random() * 30,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      // min-h-[100svh] mobile browser address bar issue fix karta hai
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f172a] pt-16 md:pt-0"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
            animate={{
              x: [`${particle.x}vw`, `${(particle.x + 20) % 100}vw`],
              y: [`${particle.y}vh`, `${(particle.y + 30) % 100}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        {/* Logo Badge - Glassmorphism Effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-xl"
        >
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            CODEBYTE
          </span>
        </motion.div>

        {/* Main Heading - Responsive Text Sizes */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Web Technologies &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Digital Solutions
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-300 mb-4 font-medium"
        >
          Building the Web, Bit by Bit.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 px-4 leading-relaxed"
        >
          We are a modern web-focused software house delivering scalable,
          secure, and high-performance digital solutions.
        </motion.p>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-blue-400 mb-8 h-6 font-mono"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full sm:w-auto px-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Scroll Indicator - Hidden on very small screens to save space */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity },
          }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div
            className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2 cursor-pointer"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
