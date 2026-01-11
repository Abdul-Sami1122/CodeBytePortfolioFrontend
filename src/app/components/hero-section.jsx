import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Code2, ChevronRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforming ideas into powerful web applications";

  // Mouse Spotlight Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

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

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: 15 + Math.random() * 20,
  }));

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#02040a] pt-16 md:pt-0 group"
    >
      {/* 1. Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Static Glows */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />

      {/* 3. Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a5b4fc 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 4. Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/20 rounded-full"
            style={{ width: p.size, height: p.size }}
            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
            animate={{
              y: [`${p.y}vh`, `${p.y - 20}vh`],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 shadow-lg"
        >
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 animate-pulse" />
          <span className="text-[10px] md:text-sm font-semibold text-blue-100 tracking-wide uppercase">
            Next-Gen Software House
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl"
        >
          We Build <br className="block md:hidden" />
          <span className="relative inline-block">
            <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Future Tech
            </span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-2xl text-blue-200/80 mb-6 md:mb-8 font-light max-w-[90%] md:max-w-3xl mx-auto leading-relaxed"
        >
          Delivering{" "}
          <span className="text-white font-medium">high-performance</span>{" "}
          digital solutions tailored to scale your business.
        </motion.p>

        {/* Typing Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-auto max-w-[95vw] text-[10px] sm:text-sm md:text-base text-gray-400 mb-8 md:mb-12 font-mono bg-black/40 px-4 py-2 md:px-6 md:py-3 rounded-xl border border-white/5 inline-flex items-center gap-2 md:gap-3 overflow-hidden"
        >
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="w-px h-3 md:h-4 bg-white/10 mx-1 md:mx-2 shrink-0" />
          <div className="flex items-center gap-1.5 md:gap-2 truncate">
            <span className="text-blue-400 hidden sm:inline">~/codebyte</span>
            <span className="text-gray-500">$</span>
            <span className="text-gray-300 truncate">{typedText}</span>
            <span className="w-1.5 h-3 md:w-2 md:h-4 bg-blue-500 animate-pulse shrink-0" />
          </div>
        </motion.div>

        {/* --- FIXED BUTTONS CONTAINER --- */}
        {/* 'flex-col' for Mobile (Stacked) | 'sm:flex-row' for Desktop (Side-by-Side) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary Button */}
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group overflow-hidden w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base md:text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex items-center justify-center gap-2">
              Start Project <ChevronRight className="w-5 h-5" />
            </span>
          </Button>

          {/* Secondary Button */}
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto border-white/10 text-white bg-white/5 hover:bg-white/10 px-8 py-6 text-base md:text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Our Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] hidden sm:block">
            Scroll Down
          </span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
