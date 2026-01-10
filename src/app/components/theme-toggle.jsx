import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ isScrolled = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon
          className={`w-6 h-6 ${
            isScrolled ? "text-gray-900 dark:text-white" : "text-white"
          }`}
        />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : 180,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun
          className={`w-6 h-6 ${
            isScrolled ? "text-gray-900 dark:text-white" : "text-white"
          }`}
        />
      </motion.div>
    </motion.button>
  );
}
