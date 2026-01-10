import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    description:
      "A modern, responsive e-commerce platform with advanced product management and secure payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1080",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Corporate Portal",
    category: "Enterprise",
    description:
      "Enterprise-grade business portal featuring employee management and document collaboration tools.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1080",
    tags: ["PHP", "MySQL", "Bootstrap"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "LMS Platform",
    category: "Education",
    description:
      "Comprehensive learning management system with course creation and student tracking features.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1080",
    tags: ["React", "MongoDB", "WebRTC"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fintech Dashboard",
    category: "Finance",
    description:
      "Real-time financial data visualization dashboard with secure transaction monitoring.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    tags: ["Vue.js", "Python", "D3.js"],
    color: "from-green-500 to-emerald-500",
  },
];

export function ProjectsSection() {
  const [ref, isInView] = useInView();

  // Infinite Scroll Data
  const sliderProjects = [...projects, ...projects];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Showcasing our expertise through successful client solutions.
          </p>
        </motion.div>

        {/* --- INFINITE SLIDER CONTAINER --- */}
        {/* ADDED 'group' CLASS HERE */}
        <div className="relative w-full overflow-hidden group">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />

          {/* Slider Track with Custom Animation Logic */}
          <div className="flex gap-6 md:gap-8 w-max py-4 animate-scroll">
            <style>{`
               @keyframes scroll {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
               
               .animate-scroll {
                 /* 40s duration for smoother project card scrolling */
                 animation: scroll 40s linear infinite;
               }

               /* PAUSE ON HOVER LOGIC */
               .group:hover .animate-scroll {
                 animation-play-state: paused !important;
               }
            `}</style>

            {sliderProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Premium Project Card
function ProjectCard({ project }) {
  return (
    <div className="group relative w-[300px] md:w-[380px] flex-shrink-0">
      <div className="relative h-full bg-white dark:bg-gray-900/40 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:hover:border-white/10">
        {/* 1. Gradient Border Top */}
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}
        />

        {/* 2. Image Section */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full shadow-sm uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          {/* External Link Button */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3. Content Section */}
        <div className="p-6 relative">
          {/* Inner Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
          />

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Tags & Action */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="flex -space-x-2 overflow-hidden">
              {project.tags.slice(0, 3).map((tag, i) => (
                <div
                  key={i}
                  className={`relative z-${
                    10 - i
                  } px-2 py-1 bg-gray-100 dark:bg-gray-800 border-2 border-white dark:border-gray-900 rounded-md text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase`}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              className={`flex items-center gap-1 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0`}
            >
              Details <ArrowRight className={`w-4 h-4 text-blue-500`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
