import {
  Code2,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e27] text-gray-300">
      {/* Call to Action Banner */}
      {/* Desktop Fix: Padding kam ki (py-8) taake strip patli aur sleek lage */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/90 text-sm md:text-base mb-4 max-w-2xl mx-auto">
            Let's transform your ideas into powerful digital solutions
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block w-full sm:w-auto bg-white text-blue-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md text-sm md:text-base"
          >
            Get Started Today
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      {/* Desktop Fix: Vertical Padding py-12 se kam karke py-10 ki */}
      <div className="container mx-auto px-4 py-10">
        {/* Desktop Fix: Gap-10 se kam karke Gap-8 kiya taake columns qareeb ayen */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* 1. Brand Info */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Code2 className="w-7 h-7 text-blue-500" />
              <span className="text-xl font-bold text-white">CODEBYTE</span>
            </div>
            {/* Text size small aur margin kam kiya */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Building the web, bit by bit. Your trusted partner for scalable,
              secure, and high-performance digital solutions.
            </p>
            <div className="flex justify-center lg:justify-start gap-3">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Links Section (Services & Quick Links) */}
          {/* Desktop Fix: Columns ke beech gap kam kiya */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Services */}
            <div className="text-center lg:text-left">
              {/* Heading margin kam kiya (mb-3) */}
              <h3 className="text-white font-bold text-base mb-3">Services</h3>
              {/* List spacing kam ki (space-y-1.5) - Ye "Khola Khola" pan khatam karega */}
              <ul className="space-y-1.5 text-sm">
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
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold text-base mb-3">
                Quick Links
              </h3>
              <ul className="space-y-1.5 text-sm">
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
                      className="text-gray-400 hover:text-blue-400 transition-colors"
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
            <h3 className="text-white font-bold text-base mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="mailto:info@codebit.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@codebit.com
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="tel:+923001234567"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-gray-400">Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#05081a]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <p className="text-gray-500 text-xs">
              © {currentYear} CODEBYTE. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
