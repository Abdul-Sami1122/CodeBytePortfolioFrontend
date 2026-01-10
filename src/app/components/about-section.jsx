import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import { Target, Eye } from "lucide-react";

export function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      // Mobile: py-12, Desktop: py-20. overflow-hidden added to prevent scrollbars during animation
      className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About CODEBYTE
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Mobile: p-6, Desktop: p-8
            className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              {/* Icon Box: Mobile w-12, Desktop w-14 */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  To build reliable web solutions that create real business
                  value. We focus on delivering quality, scalable applications
                  that solve real-world problems and drive digital
                  transformation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become a trusted technology partner for businesses
                  worldwide. We envision a future where every business has
                  access to enterprise-grade web solutions that are both
                  powerful and accessible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
