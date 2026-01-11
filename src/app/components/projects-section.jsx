import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import { ExternalLink, ArrowUpRight } from "lucide-react";
// Images import
import { WonderLust, SnS, OmniFood, WSCube, WazirGlass } from "./assests/images";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- PROJECT DATA (Added Border & Text Classes) ---
const projects = [
  {
    title: "Wonder Lust",
    category: "Hotel Reservation Website",
    description:
      "A fully responsive hotel reservation website that allows users to search rooms, check availability, view pricing, and book rooms online. Designed with a clean UI to provide smooth user experience for travelers.",
    link: "https://wonderlust-demo.com",
    image:
      WonderLust,
    tags: ["React", "Node.js", "Mongo DB"],
    // RED THEME
    color: "from-red-600 to-rose-500",
    shadow: "shadow-red-500/20",
    // New Classes for Border & Text
    borderClass: "border-red-500 dark:border-red-500",
    titleClass: "text-red-800 dark:text-red-400",
    descClass: "text-red-900/70 dark:text-red-200/70",
  },
  {
    title: "Omni Food",
    category: "Food Delivery Landing Page",
    description:
      "A clean, responsive landing page for a meal subscription service that demonstrates layout sections like Features, Meals, Pricing, Team & Testimonials. Built with modern HTML/CSS and styled for clarity and engagement.",
    link: "https://omnifoodm1.netlify.app/",
    image: OmniFood,
    tags: ["HTML", "CSS", "Bootstrap", "JS"],
    // ORANGE THEME
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
    borderClass: "border-orange-500 dark:border-orange-500",
    titleClass: "text-orange-800 dark:text-orange-400",
    descClass: "text-orange-900/70 dark:text-orange-200/70",
  },
  {
    title: "S&S Kids Furniture",
    category: "E-commerce Website",
    description:
      "An e-commerce styled web interface for kids furniture, highlighting product categories and organized item listings. Demonstrates UI structure suitable for online shopping.",
    link: "https://faizi-kids-furniture.web.app/",
    image: SnS,
    tags: ["React", "Firebase", "Cloudnary"],
    // YELLOW/AMBER THEME
    color: "from-yellow-500 to-amber-400",
    shadow: "shadow-yellow-500/20",
    borderClass: "border-amber-500 dark:border-amber-500",
    titleClass: "text-amber-800 dark:text-amber-400",
    descClass: "text-amber-900/70 dark:text-amber-200/70",
  },
  {
    title: "Wazir Glass & Aluminium",
    category: "Business / Service Website",
    description:
      "A business presentation frontend for a construction-related brand that visually showcases services and contact/action areas for customers. Focuses on lead engagement with slides, feature lists, and responsive sections.",
    link: "https://wazir-glass-frontend.onrender.com/#",
    image: WazirGlass,
    tags: ["React", "Node.js", "Mongo DB"],
    // BLUE THEME
    color: "from-blue-600 to-indigo-500",
    shadow: "shadow-blue-500/20",
    borderClass: "border-blue-500 dark:border-blue-500",
    titleClass: "text-blue-800 dark:text-blue-400",
    descClass: "text-blue-900/70 dark:text-blue-200/70",
  },
  {
    title: "WS Cube",
    category: "Educational Landing Page",
    description:
      "A promotional and lead generation landing page for a digital marketing course with user registration form and content highlighting program benefits.",
    link: "https://boostrap-assingment-ws.netlify.app/?#",
    image: WSCube,
    tags: ["HTML", "CSS", "Bootstrap", "JS"],
    // CYAN THEME
    color: "from-cyan-500 to-teal-400",
    shadow: "shadow-cyan-500/20",
    borderClass: "border-cyan-500 dark:border-cyan-500",
    titleClass: "text-cyan-800 dark:text-cyan-400",
    descClass: "text-cyan-900/70 dark:text-cyan-200/70",
  },
];

export function ProjectsSection() {
  const [ref, isInView] = useInView();
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
        <div className="relative w-full overflow-hidden group">
          {/* Fade Edges */}
          <div className="absolute inset-0 z-20 pointer-events-none [mask-image:linear-gradient(to_right,black_0%,transparent_5%,transparent_95%,black_100%)] md:[mask-image:linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] bg-transparent" />

          {/* Slider Track */}
          <div className="flex gap-8 w-max py-12 animate-scroll pl-4">
            <style>{`
               @keyframes scroll {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
               
               .animate-scroll {
                 animation: scroll 40s linear infinite;
               }

               /* PAUSE ON HOVER */
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
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card relative w-[300px] md:w-[380px] flex-shrink-0 block outline-none perspective-1000"
    >
      {/* 1. AMBIENT GLOW */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-50 transition-opacity duration-500 pointer-events-none`}
      />

      {/* 2. CARD CONTAINER */}
      <div
        className={`
          relative h-full bg-white dark:bg-[#0A0F1C] 
          /* UPDATED: Uses Custom Border Color Class */
          border ${project.borderClass}
          rounded-3xl overflow-hidden 
          transition-all duration-500 ease-out
          flex flex-col
          
          /* Hover Effects */
          group-hover/card:scale-[1.03] 
          group-hover/card:-translate-y-2
          group-hover/card:shadow-2xl
          ${project.shadow}
      `}
      >
        {/* Top Border Highlight */}
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}
        />

        {/* IMAGE AREA */}
        <div className="relative h-52 overflow-hidden shrink-0">
          {/* External Link Icon */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-2 group-hover/card:translate-y-0">
            <div className="bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          <img
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src || project.image
            }
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={`px-3 py-1 bg-gradient-to-r ${project.color} backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider`}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* TEXT AREA */}
        <div className="p-6 relative flex-grow flex flex-col justify-between">
          {/* Background Tint (Light Project Color) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-[0.2] dark:opacity-[0.15] pointer-events-none`}
          />

          <div>
            {/* UPDATED: Title Color */}
            <h3
              className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${project.titleClass}`}
            >
              {project.title}
            </h3>

            {/* UPDATED: Description Color */}
            <p
              className={`text-sm leading-relaxed mb-6 line-clamp-2 font-medium ${project.descClass}`}
            >
              {project.description}
            </p>
          </div>

          {/* Footer: Tags & Link Text */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-white/10 flex items-center justify-between relative z-10">
            {/* TECHNOLOGY TAGS */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 bg-gradient-to-r ${project.color} border border-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Case Link */}
            <div
              className={`flex items-center gap-1.5 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color} opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/card:translate-x-0`}
            >
              View Case <ArrowUpRight className={`w-5 h-5 text-gray-500`} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
