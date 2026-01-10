import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import { Code, Layers, Palette, Plug, Database, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Tailored web solutions built from scratch to match your unique business requirements.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
    bgHover: "group-hover:bg-blue-500/5",
    lightShadow: "hover:shadow-blue-500/10", // New for Light Mode
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "End-to-end development expertise covering both frontend and backend technologies.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    shadow: "shadow-purple-500/20",
    border: "group-hover:border-purple-500/50",
    bgHover: "group-hover:bg-purple-500/5",
    lightShadow: "hover:shadow-purple-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10",
    shadow: "shadow-pink-500/20",
    border: "group-hover:border-pink-500/50",
    bgHover: "group-hover:bg-pink-500/5",
    lightShadow: "hover:shadow-pink-500/10",
  },
  {
    icon: Plug,
    title: "API Development",
    description:
      "Secure RESTful APIs and seamless third-party integrations for connected systems.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    shadow: "shadow-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    bgHover: "group-hover:bg-cyan-500/5",
    lightShadow: "hover:shadow-cyan-500/10",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database architecture and management for reliable data storage.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    shadow: "shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/50",
    bgHover: "group-hover:bg-emerald-500/5",
    lightShadow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support and maintenance to keep your applications running smoothly.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    shadow: "shadow-orange-500/20",
    border: "group-hover:border-orange-500/50",
    bgHover: "group-hover:bg-orange-500/5",
    lightShadow: "hover:shadow-orange-500/10",
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
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Services
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 leading-relaxed">
            High-performance digital solutions tailored to elevate your
            business.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: INFINITE SLIDER + HOVER ANIMATION --- */}
        <div className="md:hidden relative w-full -mx-4 overflow-hidden py-4 group">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />

          <div className="flex gap-5 w-max px-4 animate-scroll">
            <style>{`
               @keyframes scroll {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
               
               .animate-scroll {
                 animation: scroll 25s linear infinite;
               }

               /* PAUSE ON CONTAINER HOVER */
               .group:hover .animate-scroll {
                 animation-play-state: paused !important;
               }
             `}</style>

            {sliderServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={`mobile-${index}`}
                  // CHANGE: Added hover transition effects (Scale + Shadow + Lift)
                  className="w-[280px] bg-white dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-6 rounded-3xl shadow-lg dark:shadow-none flex-shrink-0 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
                  />

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DESKTOP VIEW: POLISHED LIGHT & DARK GRID --- */}
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
                // CHANGE: Light mode styling significantly improved (bg-white/80, colored shadows, glass feel)
                className={`group relative p-8 rounded-[2rem] transition-all duration-500
                  ${service.bgColor} backdrop-blur-xl dark:bg-gray-900/40 dark:backdrop-blur-md
                  border border-black/20 dark:border-white/5
                  shadow-lg shadow-gray-200/50 dark:shadow-none
                  hover:shadow-2xl ${service.lightShadow} ${service.border} dark:hover:border-opacity-50
                `}
              >
                {/* Inner Glow Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} opacity-[0.03] dark:opacity-[0.08] rounded-[2rem]`}
                />

                {/* Blur Blob */}
                <div
                  className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 shadow-lg ${service.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      <Icon className="w-7 h-7 text-gray-700 dark:text-white relative z-10" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-900 hover:text-white-700 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Learn More Arrow */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white bg-clip-text bg-gradient-to-r `}
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
