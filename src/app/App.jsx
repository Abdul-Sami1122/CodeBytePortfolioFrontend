import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { TechStackSection } from "./components/tech-stack-section";
import { ProcessSection } from "./components/process-section";
import { ProjectsSection } from "./components/projects-section";
import { TeamSection } from "./components/team-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import CustomCursor from "./components/ui/CustomCursor";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { ScrollToTop } from "./components/scroll-to-top";
import { WhatsAppButton } from "./components/whatsapp-button";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        {/* Toast Notifications */}
        <Toaster position="top-right" richColors />
        

        {/* Navigation */}

        <CustomCursor />
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <div id="home">
            <HeroSection />
          </div>

          {/* About Section */}
          <div id="about">
            <AboutSection />
          </div>

          {/* Services Section */}
          <div id="services">
            <ServicesSection />
          </div>

          {/* Technology Stack Section */}
          <TechStackSection />

          {/* Process Section */}
          <div id="process">
            <ProcessSection />
          </div>

          {/* Projects Section */}
          <div id="projects">
            <ProjectsSection />
          </div>

          {/* Team Section */}
          <div id="team">
            <TeamSection />
          </div>

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* Contact Section */}
          <div id="contact">
            <ContactSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
