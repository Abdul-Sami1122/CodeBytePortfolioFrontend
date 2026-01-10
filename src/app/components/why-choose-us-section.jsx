import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import {
  Users,
  FileCode,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We prioritize your vision and work closely with you throughout the development process to ensure your goals are met.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: FileCode,
    title: "Clean & Maintainable Code",
    description:
      "We write well-documented, scalable code following industry best practices for long-term sustainability.",
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule without compromising on quality or functionality.",
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description:
      "Enterprise-quality solutions at competitive prices, making professional web development accessible to all businesses.",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/20",
  },
];

export function WhyChooseUsSection() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      // Mobile: py-12, Desktop: py-24
      className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Why Us?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose CODEBYTE?
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Your success is our priority. We combine technical expertise with
            business intelligence.
          </p>
        </motion.div>

        {/* Grid Layout: Changed to 2 columns for better balance with 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Mobile par scale remove kiya, sirf Y-axis movement rakhi
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                />

                {/* Border Glow on Hover */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 dark:group-hover:border-blue-400/20 rounded-3xl transition-colors duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${reason.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wide group/link cursor-pointer">
                    <span className="group-hover/link:underline decoration-2 underline-offset-4">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
