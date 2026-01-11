import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import { Users, FileCode, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We prioritize your vision and work closely with you throughout the development process to ensure your goals are met.",
    color: "from-blue-600 to-cyan-500",
    lightShadow: "shadow-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: FileCode,
    title: "Clean & Maintainable Code",
    description:
      "We write well-documented, scalable code following industry best practices for long-term sustainability.",
    color: "from-purple-600 to-pink-500",
    lightShadow: "shadow-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule without compromising on quality or functionality.",
    color: "from-orange-500 to-red-500",
    lightShadow: "shadow-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description:
      "Enterprise-quality solutions at competitive prices, making professional web development accessible to all businesses.",
    color: "from-green-600 to-emerald-500",
    lightShadow: "shadow-green-200",
    iconColor: "text-green-600",
  },
];

export function WhyChooseUsSection() {
  const [ref, isInView] = useInView();
  const sliderReasons = [...reasons, ...reasons, ...reasons];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden relative"
    >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            <CheckCircle2 className="w-4 h-4" />
            Why Choose Us?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Vision, Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Expertise
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            We combine technical excellence with business intelligence to
            deliver outstanding results.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: AUTO SLIDER + SCALE HOVER --- */}
        <div className="md:hidden relative w-full -mx-4 overflow-hidden py-4 group">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 dark:from-[#030712] to-transparent z-20 pointer-events-none" />

          <div className="flex gap-5 w-max px-4 animate-scroll">
            <style>{`
               @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
               .animate-scroll { animation: scroll 30s linear infinite; }
               .group:hover .animate-scroll, .group:active .animate-scroll { animation-play-state: paused !important; }
             `}</style>

            {sliderReasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`mobile-${index}`}
                  // CHANGE: Added 'hover:scale-105' for scaling
                  className={`
                     w-[280px] bg-white dark:bg-gray-900/60 backdrop-blur-xl 
                     border border-gray-200 dark:border-gray-800 
                     p-6 rounded-[2rem] shadow-lg dark:shadow-none 
                     flex-shrink-0 relative overflow-hidden 
                     transition-all duration-300 
                     hover:scale-105 hover:shadow-xl
                     active:scale-95 active:border-blue-400
                   `}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                  />
                  <div
                    className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 active:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none`}
                  />
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // CHANGE: Added 'scale: 1.02'
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500
                  bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xl ${item.lightShadow}
                  dark:bg-gray-900/40 dark:backdrop-blur-md dark:border-white/5 dark:shadow-none
                  hover:shadow-2xl dark:hover:border-opacity-50
                `}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-500 rounded-[2rem] pointer-events-none`}
                />
                <div
                  className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[2px] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                      <Icon
                        className={`w-7 h-7 ${item.iconColor} dark:text-white relative z-10`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
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
