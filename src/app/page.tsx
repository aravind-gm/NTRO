import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import CursorWrapper from "@/components/CursorWrapper";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI/ML Engineer & Full Stack Developer | Portfolio",
  description:
    "Premium portfolio of an AI/ML engineer and full-stack developer. Specializing in Python, FastAPI, React, Next.js, and cloud technologies.",
  keywords: [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 text-white overflow-hidden relative">
      <CursorWrapper />
      <LoadingScreen />
      <Navbar />

      {/* Hero Section with top spacing for navbar + social bar */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience & Timeline */}
      <TimelineSection />

      {/* Achievements */}
      <AchievementsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
