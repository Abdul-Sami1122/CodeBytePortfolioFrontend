import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Replace with your actual WhatsApp number
  const whatsappNumber = "923001234567";
  const message = "Hi! I'm interested in your services at CODEBYTE.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Agar aap chahte hain ke pehle Widget khule, to niche wali line uncomment karen aur window.open hata den:
    // setIsExpanded(!isExpanded);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ delay: 1, duration: 0.3 }}
        className={`fixed right-4 md:right-8 z-40 transition-all duration-300 ${
          isScrolled ? "bottom-24 md:bottom-28" : "bottom-4 md:bottom-8"
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="relative w-14 h-14 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />

          {/* Notification Dot */}
          <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />

          {/* Pulse Ring Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </motion.button>

        {/* Tooltip - Only show on desktop */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap"
            >
              <div className="text-sm font-medium">Chat with us!</div>
              <div className="text-xs text-gray-300">
                We typically reply instantly
              </div>

              {/* Arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900 dark:border-l-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Quick Chat Widget (Optional - appears on click if logic enabled) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed right-4 md:right-8 z-40 w-[calc(100vw-2rem)] md:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              isScrolled ? "bottom-44 md:bottom-48" : "bottom-20 md:bottom-24"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-white">CODEBYTE Support</div>
                  <div className="text-xs text-green-100">
                    Online - Reply in minutes
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 rounded-tl-none">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  👋 Hi! Welcome to CODEBYTE. How can we help you today?
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full text-left bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-3 transition-colors"
                >
                  <div className="font-medium text-green-700 dark:text-green-400 text-sm">
                    💬 Start a Conversation
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Get instant support on WhatsApp
                  </div>
                </button>

                <button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full text-left bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 transition-colors"
                >
                  <div className="font-medium text-blue-700 dark:text-blue-400 text-sm">
                    📋 Request a Quote
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Get pricing for your project
                  </div>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-900 p-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Powered by WhatsApp Business
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
