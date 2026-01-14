import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "code3byte@gmail.com",
    secondary: "Reply in 24h",
    link: "mailto:info@codebit.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+92 322 1652624",
    secondary: "Mon-Fri 9am-6pm",
    link: "tel:+923221652624",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Lahore, Punjab",
    secondary: "Pakistan",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    primary: "Mon-Fri: 9AM-6PM",
    secondary: "Sat: 10AM-2PM",
    link: "#",
    color: "from-orange-500 to-red-500",
  },
];

// --- DYNAMIC API CONFIGURATION (NO CHANGES HERE) ---
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function ContactSection() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // --- LOGIC STARTS (UNCHANGED) ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Log the API URL being used for debugging
      console.log("📡 Sending request to:", `${API_URL}/api/contact`);
      console.log("📤 Form data:", { ...formData, message: "[REDACTED]" });

      // Add timeout to fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("📥 Response status:", response.status, response.statusText);

      // Handle different response types
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Server might return HTML error page
        const text = await response.text();
        console.error("❌ Non-JSON response:", text.substring(0, 200));
        throw new Error("Server returned an invalid response");
      }

      if (response.ok) {
        console.log("✅ Message sent successfully");
        toast.success("Message sent! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setErrors({});
      } else {
        // Log server-side error details
        console.error("❌ Server error:", {
          status: response.status,
          statusText: response.statusText,
          data,
        });

        // Show specific error messages based on status code
        if (response.status === 429) {
          toast.error("Too many requests. Please try again in 15 minutes.");
        } else if (response.status === 400) {
          toast.error(data.error || "Invalid form data. Please check your inputs.");
        } else if (response.status === 500) {
          toast.error("Server error. Our team has been notified. Please try again later.");
        } else {
          toast.error(data.error || "Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      console.error("❌ Submission error:", error);

      // Detailed error handling based on error type
      if (error.name === "AbortError") {
        console.error("⏱️ Request timeout after 30 seconds");
        toast.error("Request timed out. Please check your internet connection and try again.");
      } else if (error instanceof TypeError && error.message === "Failed to fetch") {
        console.error("🌐 Network error - possible causes:");
        console.error("  - Internet disconnected");
        console.error("  - CORS blocked by server");
        console.error("  - Server is down");
        console.error("  - Ad blocker/firewall blocking request");
        console.error("  - Wrong API URL:", API_URL);
        toast.error(
          "Cannot connect to server. Please check your internet connection or try again later."
        );
      } else if (!navigator.onLine) {
        console.error("📡 Browser reports offline status");
        toast.error("You appear to be offline. Please check your internet connection.");
      } else {
        console.error("🔴 Unexpected error:", error.message);
        toast.error(
          "An unexpected error occurred. Please try again or contact support."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  // --- LOGIC ENDS ---

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor & Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Touch
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Ready to start your project? Let's build something amazing together.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                // Premium Glass Card Style
                className="group bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`}
                />

                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 relative z-10">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                  {info.primary}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Main Form & Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900/40 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 h-full relative overflow-hidden">
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Your Name
                    </Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`h-12 bg-gray-50 dark:bg-[#0a0e27]/50 border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Email Address
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`h-12 bg-gray-50 dark:bg-[#0a0e27]/50 border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300..."
                      className={`h-12 bg-gray-50 dark:bg-[#0a0e27]/50 border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Company (Optional)
                    </Label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="h-12 bg-gray-50 dark:bg-[#0a0e27]/50 border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Service Required
                    </Label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-[#0a0e27]/50 text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="ui">UI/UX Design</option>
                      <option value="api">API Integration</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300 font-medium">
                      Project Budget
                    </Label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-[#0a0e27]/50 text-gray-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Range</option>
                      <option value="low">Under $1,000</option>
                      <option value="mid">$1,000 - $5,000</option>
                      <option value="high">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="dark:text-gray-300 font-medium">
                    Message
                  </Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`min-h-[160px] bg-gray-50 dark:bg-[#0a0e27]/50 border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98] font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 flex flex-col h-full"
          >
            {/* Map Card */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl h-48 md:h-64 relative overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                alt="Map Location"
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" /> Visit Our
                    Office
                  </p>
                  <p className="text-gray-300 text-sm pl-7">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Socials Card */}
            <div className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Connect With Us
              </h3>
              <div className="flex justify-evenly gap-2">
                {/* CHANGE: Added '!' before bg classes to force the color change */}
                <SocialBtn icon={Facebook} color="hover:!bg-blue-600" />
                {/* <SocialBtn icon={Twitter} color="hover:!bg-sky-500" /> */}
                <SocialBtn icon={Linkedin} color="hover:!bg-blue-700" />
                <SocialBtn icon={Instagram} color="hover:!bg-pink-600" />
              </div>
            </div>

            {/* Why Us Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20 flex-grow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-xl font-bold mb-4 relative z-10">
                Why Codebyte?
              </h3>
              <ul className="space-y-3 relative z-10">
                {[
                  "Free Consultation",
                  "NDA Protected",
                  "On-Time Delivery",
                  "24/7 Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm md:text-base opacity-90"
                  >
                    <div className="p-1 bg-white/20 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 relative z-10 group">
                Download Brochure{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Socials
// Helper Component for Socials
// Helper Component for Socials
function SocialBtn({ icon: Icon, color }) {
  return (
    <a
      href="#"
      // CHANGE: className structure update kiya
      className={`w-12 h-12 rounded-xl flex items-center justify-center 
        bg-gray-50 dark:bg-gray-700 
        text-gray-500 dark:text-gray-300 
        transition-all duration-300 
        shadow-sm hover:shadow-lg hover:-translate-y-1 
        hover:text-white 
        ${color}`} // Color prop last mein rakha hai
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
