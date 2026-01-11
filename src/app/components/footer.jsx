import {
  Code2,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] text-gray-300 relative overflow-hidden border-t border-white/5">
      {/* Background Texture & Glows */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- CALL TO ACTION STRIP --- */}
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md py-10 border-b border-white/10 relative overflow-hidden">
          {/* Inner Glow Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Let's transform your ideas into powerful digital solutions. Get in
              touch today!
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* 1. Brand Info */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                CODEBYTE
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Building the web, bit by bit. Your trusted partner for scalable,
              secure, and high-performance digital solutions.
            </p>

            <div className="flex justify-center lg:justify-start gap-3">
              <SocialIcon Icon={Facebook} href="#" color="hover:bg-blue-600" />
              <SocialIcon Icon={Twitter} href="#" color="hover:bg-sky-500" />
              <SocialIcon Icon={Linkedin} href="#" color="hover:bg-blue-700" />
              <SocialIcon Icon={Github} href="#" color="hover:bg-gray-800" />
            </div>
          </div>

          {/* 2. Quick Links & Services */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 md:gap-12 pl-0 lg:pl-10">
            {/* Services */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>{" "}
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Web Development",
                  "App Development",
                  "UI/UX Design",
                  "API Integration",
                  "Database Mgmt",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>{" "}
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "About Us",
                  "Our Process",
                  "Portfolio",
                  "Our Team",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-gray-400 hover:text-purple-400 hover:pl-2 transition-all duration-300 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>{" "}
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-blue-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:code3byte@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    code3byte@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300 text-green-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+92 322 1652624"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +92 322 1652624
                  </a>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 text-purple-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">
                    Location
                  </p>
                  <span className="text-gray-300">Lahore, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="border-t border-white/5 bg-[#02040a] relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-500 text-xs font-medium">
              © {currentYear} <span className="text-gray-300">CODEBYTE</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function SocialIcon({ Icon, href, color }) {
  return (
    <a
      href={href}
      className={`w-10 h-10 rounded-xl bg-gray-800/50 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white ${color}`}
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
