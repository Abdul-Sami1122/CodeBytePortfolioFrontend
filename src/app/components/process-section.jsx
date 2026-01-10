import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import {
  ClipboardList,
  Layout,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We analyze your business needs and define clear project objectives.",
    icon: ClipboardList,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/50",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "Designing scalable system architecture and creating detailed project roadmap.",
    icon: Layout,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/50",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Creating beautiful, user-centric interfaces that align with your brand.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/50",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Building robust, scalable solutions using best practices and modern tech.",
    icon: Code,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/50",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous quality assurance to ensure flawless performance and reliability.",
    icon: TestTube,
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-emerald-500/50",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Seamless launch with zero downtime and comprehensive monitoring.",
    icon: Rocket,
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/50",
  },
  {
    number: "07",
    title: "Support",
    description: "Ongoing maintenance and support to ensure continued success.",
    icon: HeadphonesIcon,
    color: "from-red-500 to-pink-600",
    shadow: "shadow-red-500/50",
  },
];

export function ProcessSection() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Process
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            A proven 7-step workflow that ensures successful project delivery
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Base Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

          {/* Animated Gradient Beam */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2.5, ease: "linear" }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.6)] z-0"
          />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop Spacer */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Icon Circle (Center Point) */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center z-10 w-16 md:w-auto">
                    {/* Pulsing Glow Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30 blur-xl rounded-full animate-pulse`}
                    />

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="relative w-14 h-14 md:w-20 md:h-20 bg-white dark:bg-[#030712] border-4 border-gray-100 dark:border-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group z-20"
                    >
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-inner relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-24 md:pl-0 md:w-5/12">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`group relative bg-white dark:bg-gray-900/60 dark:backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-lg transition-all duration-300
                      ${isEven ? "md:text-right" : "md:text-left"}
                      hover:shadow-2xl hover:border-blue-200 dark:hover:border-gray-700`}
                    >
                      {/* 1. Gradient Border Top */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}
                      />

                      {/* 2. Inner Glow on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
                      />

                      {/* Step Number Background */}
                      <span
                        className={`absolute -top-4 text-7xl font-black text-gray-100 dark:text-gray-800/50 -z-10 select-none transition-colors duration-300 group-hover:text-gray-200 dark:group-hover:text-gray-800 ${
                          isEven ? "md:right-6 right-6" : "md:left-6 left-6"
                        }`}
                      >
                        {step.number}
                      </span>

                      <h3
                        className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${step.color}`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {step.description}
                      </p>

                      {/* Mobile Arrow Connector */}
                      <div className="md:hidden absolute top-10 -left-3 w-4 h-4 bg-white dark:bg-[#030712] border-l border-b border-gray-100 dark:border-gray-800 transform rotate-45 z-0" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
