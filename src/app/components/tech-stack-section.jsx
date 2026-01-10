import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";

const technologies = [
  {
    name: "HTML5",
    icon: "🌐",
    category: "Markup",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS3",
    icon: "🎨",
    category: "Styling",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    category: "Programming",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "React.js",
    icon: "⚛️",
    category: "Library",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Bootstrap",
    icon: "🅱️",
    category: "Framework",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "PHP",
    icon: "🐘",
    category: "Backend",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "Node.js",
    icon: "💚",
    category: "Runtime",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    category: "Database",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Git",
    icon: "📦",
    category: "Version Control",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Figma",
    icon: "🎯",
    category: "Design",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tailwind",
    icon: "🌊",
    category: "Framework",
    color: "from-cyan-400 to-teal-500",
  },
];

export function TechStackSection() {
  const [ref, isInView] = useInView();
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Glows (Subtle Ambiance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            Our Toolkit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Stack
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 leading-relaxed">
            We use cutting-edge technologies to build scalable and robust
            applications.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative flex flex-col gap-6 md:gap-8">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 dark:from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 dark:from-[#030712] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left Scroll */}
          <div className="flex overflow-hidden group select-none py-2">
            <div className="flex gap-4 md:gap-6 flex-shrink-0 animate-scroll group-hover:[animation-play-state:paused]">
              {duplicatedTechs.map((tech, index) => (
                <TechCard key={`row1-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          {/* Row 2: Right Scroll (Reverse) */}
          <div className="flex overflow-hidden group select-none py-2">
            <div className="flex gap-4 md:gap-6 flex-shrink-0 animate-scroll-reverse group-hover:[animation-play-state:paused]">
              {duplicatedTechs.map((tech, index) => (
                <TechCard key={`row2-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Premium Tech Card
function TechCard({ tech }) {
  return (
    <div className="group relative flex-shrink-0 w-36 md:w-48 cursor-default">
      {/* Card Container */}
      <div className="relative bg-white dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
        {/* 1. Gradient Border (Bottom) */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* 2. Inner Glow (Background) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none`}
        />

        {/* Icon Box */}
        <div
          className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}
        >
          <span className="text-2xl md:text-3xl filter drop-shadow-md select-none">
            {tech.icon}
          </span>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {tech.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate font-medium">
            {tech.category}
          </p>
        </div>
      </div>
    </div>
  );
}
