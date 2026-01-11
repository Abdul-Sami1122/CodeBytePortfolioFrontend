import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import {
  Code,
  Layers,
  Palette,
  Plug,
  Database,
  Settings,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Tailored web solutions built from scratch to match your unique business requirements.",
    color: "from-blue-600 to-cyan-500",
    iconColor: "text-blue-600",
    lightShadow: "shadow-blue-200",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "End-to-end development expertise covering both frontend and backend technologies.",
    color: "from-purple-600 to-pink-500",
    iconColor: "text-purple-600",
    lightShadow: "shadow-purple-200",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    color: "from-pink-600 to-rose-500",
    iconColor: "text-pink-600",
    lightShadow: "shadow-pink-200",
  },
  {
    icon: Plug,
    title: "API Development",
    description:
      "Secure RESTful APIs and seamless third-party integrations for connected systems.",
    color: "from-cyan-600 to-blue-500",
    iconColor: "text-cyan-600",
    lightShadow: "shadow-cyan-200",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database architecture and management for reliable data storage.",
    color: "from-emerald-600 to-green-500",
    iconColor: "text-emerald-600",
    lightShadow: "shadow-emerald-200",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support and maintenance to keep your applications running smoothly.",
    color: "from-orange-600 to-amber-500",
    iconColor: "text-orange-600",
    lightShadow: "shadow-orange-200",
  },
];

export function ServicesSection() {
  const [ref, isInView] = useInView();
  const sliderServices = [...services, ...services];

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Texture & Glows */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4" />
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Services
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            High-performance digital solutions tailored to elevate your
            business.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: INFINITE SLIDER --- */}
        <div className="md:hidden relative w-full -mx-4 overflow-hidden py-4 group">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />

          <div className="flex gap-5 w-max px-4 animate-scroll">
            <style>{`
               @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
               .animate-scroll { animation: scroll 25s linear infinite; }
               .group:hover .animate-scroll { animation-play-state: paused !important; }
             `}</style>

            {sliderServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={`mobile-${index}`}
                  className="w-[280px] bg-white dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-6 rounded-[2rem] shadow-lg dark:shadow-none flex-shrink-0 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  {/* Top Gradient Border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                  />

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DESKTOP VIEW: PREMIUM CARDS (About Section Style) --- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500
                  /* Glass Effect */
                  bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl ${service.lightShadow}
                  /* Dark Mode */
                  dark:bg-gray-900/40 dark:backdrop-blur-md dark:border-white/5 dark:shadow-none
                  /* Hover */
                  hover:shadow-2xl dark:hover:border-opacity-50
                `}
              >
                {/* 1. Top Gradient Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]`}
                />

                {/* 2. Inner Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-500 rounded-[2rem] pointer-events-none`}
                />

                {/* 3. Dark Mode Corner Glow */}
                <div
                  className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon Box (Gradient Border) */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[2px] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      <Icon
                        className={`w-7 h-7 ${service.iconColor} dark:text-white relative z-10`}
                      />
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.color}`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Learn More Arrow */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                  >
                    Learn more <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
