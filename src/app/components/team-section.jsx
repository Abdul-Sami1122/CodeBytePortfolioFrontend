import { motion } from "motion/react";
import { useInView } from "./hooks/use-in-view";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Award,
  Code2,
  Rocket,
} from "lucide-react";
import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    department: "Leadership",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    bio: "Visionary leader with 10+ years of experience in web development and digital transformation.",
    expertise: ["Strategy", "Business Dev", "Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "ahmed@codebit.com",
    },
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah Khan",
    role: "CTO & Co-Founder",
    department: "Technology",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    bio: "Expert in modern web technologies and cloud architecture. Leading technical innovation.",
    expertise: ["Cloud Arch", "System Design", "Tech Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "sarah@codebit.com",
    },
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    department: "Development",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
    bio: "Full-stack expert specializing in React, Node.js, and database optimization.",
    expertise: ["React", "Node.js", "PostgreSQL"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "michael@codebit.com",
    },
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
  },
];

export function TeamSection() {
  const [ref, isInView] = useInView();
  const sliderTeam = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#030712] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor (Ab Fade Effect isay nahi chupayega) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            Our Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Team
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Talented professionals dedicated to delivering exceptional digital
            solutions.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: SLIDER (Fixed Fade Issue) --- */}
        <div className="md:hidden relative w-full -mx-4 pb-8 group">
          {/* MAGIC FIX: Mask Image se edges transparent honge, background chupanay wale div hata diye */}
          <div className="flex gap-6 w-max px-4 animate-scroll py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <style>{`
               @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
               .animate-scroll { animation: scroll 35s linear infinite; }
               .group:hover .animate-scroll, .group:active .animate-scroll { animation-play-state: paused !important; }
             `}</style>

            {sliderTeam.map((member, index) => {
              return (
                <div
                  key={`mobile-${index}`}
                  className={`
                     w-[300px] bg-white dark:bg-gray-900/60 backdrop-blur-xl 
                     border border-gray-200 dark:border-gray-800 
                     rounded-[2rem] overflow-hidden shadow-lg 
                     flex-shrink-0 relative transition-all duration-300
                     
                     /* HOVER & ACTIVE EFFECTS */
                     hover:scale-105 hover:shadow-2xl hover:border-blue-500/50 hover:z-10
                     active:scale-95 active:border-blue-400 active:shadow-[0_0_30px_rgba(59,130,246,0.4)]
                   `}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`}
                  />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-70" />
                    {ImageWithFallback ? (
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute top-3 right-3 z-20">
                      <span className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-bold border border-white/10">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p
                        className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${member.color}`}
                      >
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                      <SocialLink
                        href={member.social.linkedin}
                        icon={Linkedin}
                        label="LinkedIn"
                      />
                      <SocialLink
                        href={member.social.twitter}
                        icon={Twitter}
                        label="Twitter"
                      />
                      <SocialLink
                        href={member.social.github}
                        icon={Github}
                        label="Github"
                      />
                    </div>

                    <div className="mt-1 text-[9px] uppercase font-bold tracking-widest text-gray-400 opacity-50 text-center">
                      Hold to Pause
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={`${member.name}-${index}`} member={member} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 max-w-5xl mx-auto"
        >
          <StatCard
            number="3+"
            label="Core Members"
            color="from-blue-400 to-blue-600"
          />
          <StatCard
            number="50+"
            label="Projects Done"
            color="from-purple-400 to-purple-600"
          />
          <StatCard
            number="25+"
            label="Years Exp."
            color="from-emerald-400 to-emerald-600"
          />
          <StatCard
            number="100%"
            label="Satisfaction"
            color="from-orange-400 to-orange-600"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              We're always looking for talented individuals passionate about
              technology.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ... (Baaki wahi TeamCard, SocialLink aur StatCard functions rahenge)
function TeamCard({ member }) {
  const Icon = member.icon;
  return (
    <div className="group relative w-[350px] flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2">
      <div className="relative h-full bg-white dark:bg-gray-900/40 dark:backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 flex flex-col">
        <div
          className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${member.color}`}
        />
        <div className="relative h-72 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60" />
          {ImageWithFallback ? (
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-200 dark:border-gray-700">
              {member.department}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-grow relative">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
          />
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all">
                {member.name}
              </h3>
              <p
                className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${member.color}`}
              >
                {member.role}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.color} p-0.5 shadow-lg group-hover:rotate-12 transition-transform duration-300`}
            >
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[10px] flex items-center justify-center">
                <Icon className={`w-5 h-5 text-gray-700 dark:text-gray-200`} />
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
            {member.bio}
          </p>
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/5 group-hover:border-blue-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <SocialLink
                href={member.social.linkedin}
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href={member.social.twitter}
                icon={Twitter}
                label="Twitter"
              />
              <SocialLink
                href={member.social.github}
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href={`mailto:${member.social.email}`}
                icon={Mail}
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function StatCard({ number, label, color }) {
  return (
    <div className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-gray-100 dark:border-gray-800 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
      <div
        className={`text-3xl md:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${color} group-hover:scale-110 transition-transform duration-300 inline-block`}
      >
        {number}
      </div>
      <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
