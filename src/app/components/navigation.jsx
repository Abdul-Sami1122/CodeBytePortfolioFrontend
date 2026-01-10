import { useState, useEffect } from "react";
import {
  Code2,
  Menu,
  X,
  Home,
  User,
  Sparkles,
  GitBranch,
  FolderKanban,
  Users,
  Mail,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Process", href: "#process", icon: GitBranch },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Team", href: "#team", icon: Users },
  { label: "Contact", href: "#contact", icon: Mail },
];

const sidebarVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (window.innerWidth < 768 ? 10 : 50));
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body Scroll Lock logic
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0a0e27]/80 backdrop-blur-xl saturate-150 border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-blue-900/5"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 cursor-pointer z-50 relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? "bg-blue-600/10" : "bg-white/10"
              }`}
            >
              <Code2
                className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
                isScrolled
                  ? "from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-gray-200 dark:to-gray-400"
                  : "from-white via-gray-100 to-gray-300"
              }`}
            >
              CODEBYTE
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/10 dark:bg-gray-800/30 p-1.5 rounded-full border border-gray backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 dark:text-white bg-white dark:bg-blue-600/20 shadow-sm"
                      : isScrolled
                      ? "text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle isScrolled={isScrolled} />
            <Button
              onClick={() => scrollToSection("#contact")}
              className={`${
                isScrolled
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              } px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all active:scale-95 ${
                isScrolled
                  ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  : "text-white bg-white/10 backdrop-blur-md"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- SIDEBAR MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 1. Backdrop Overlay (Fixes: Full Screen Blur & Hides Arrow) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              // MAJOR FIX HERE:
              // 1. z-[99998] -> Ye Backdrop ko Arrow button (z-40) aur baki sab ke upar layega.
              // 2. h-screen w-screen -> Ye ensure karega ke blur poori screen par ho.
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99998] h-screen w-screen"
            />

            {/* 2. Sidebar Container */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // MAJOR FIX HERE: z-[99999] -> Sidebar sabse upar rahega (Backdrop se bhi upar)
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-white dark:bg-[#0a0e27] border-l border-gray-200 dark:border-gray-800 shadow-2xl z-[99999] flex flex-col overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex items-center justify-between bg-blue-50 border-b border-blue-200 dark:border-gray-800 dark:bg-gray-900/50">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      variants={linkVariants}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all group ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <span className="font-semibold">{link.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-blue-600" : "text-gray-300"
                        } group-hover:translate-x-1`}
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-blue-200 dark:border-gray-800 bg-blue-50 dark:bg-gray-900/50 space-y-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                >
                  Start Your Project
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
