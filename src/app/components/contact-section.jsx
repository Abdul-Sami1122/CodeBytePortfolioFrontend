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
    primary: "info@codebit.com",
    secondary: "Reply in 24h",
    link: "mailto:info@codebit.com",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+92 300 1234567",
    secondary: "Mon-Fri 9am-6pm",
    link: "tel:+923001234567",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Lahore, Punjab",
    secondary: "Pakistan",
    link: "#",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    primary: "Mon-Fri: 9AM-6PM",
    secondary: "Sat: 10AM-2PM",
    link: "#",
    gradient: "from-orange-500 to-orange-600",
  },
];

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // UPDATED: Now connects to a backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Note: Replace with your actual production URL when deploying
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
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
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Could not connect to the server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Ready to start your project? Let's build something amazing together.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
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
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {info.primary}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">Your Name</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`h-12 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">Email Address</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`h-12 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">Phone Number</Label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300..."
                      className={`h-12 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Company (Optional)
                    </Label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="h-12 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">
                      Service Required
                    </Label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
                    >
                      <option value="">Select Service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="ui">UI/UX Design</option>
                      <option value="api">API Integration</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">Project Budget</Label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full h-12 px-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none"
                    >
                      <option value="">Select Range</option>
                      <option value="low">Under $1,000</option>
                      <option value="mid">$1,000 - $5,000</option>
                      <option value="high">$5,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                  <Label className="dark:text-gray-300">Message</Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and core requirements..."
                    className={`min-h-[160px] bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-lg transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 flex flex-col h-full"
          >
            {/* Map Visual */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl h-48 md:h-64 relative overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                alt="Map Location"
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">
                    Visit Our Office
                  </p>
                  <p className="text-gray-300 text-sm">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Connect With Us
              </h3>
              <div className="flex justify-between gap-2">
                <SocialBtn icon={Facebook} color="hover:bg-blue-600" />
                <SocialBtn icon={Twitter} color="hover:bg-sky-500" />
                <SocialBtn icon={Linkedin} color="hover:bg-blue-700" />
                <SocialBtn icon={Instagram} color="hover:bg-pink-600" />
              </div>
            </div>

            {/* Why Us */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-3xl text-white shadow-xl flex-grow">
              <h3 className="text-xl font-bold mb-4">Why Codebit?</h3>
              <ul className="space-y-3">
                {[
                  "Free Consultation",
                  "NDA Protected",
                  "On-Time Delivery",
                  "24/7 Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm md:text-base opacity-90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-200" /> {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold backdrop-blur-sm transition-colors flex items-center justify-center gap-2">
                Download Brochure <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Social Button Helper
function SocialBtn({ icon: Icon, color }) {
  return (
    <a
      href="#"
      className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 ${color} hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg`}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}