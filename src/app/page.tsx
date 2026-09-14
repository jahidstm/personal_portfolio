import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills section placeholder */}
      <section id="skills" className="min-h-screen px-6 py-24" />

      {/* Projects section placeholder */}
      <section id="projects" className="min-h-screen px-6 py-24" />

      {/* Experience section placeholder */}
      <section id="experience" className="min-h-screen px-6 py-24" />

      {/* Contact section placeholder */}
      <section id="contact" className="min-h-screen px-6 py-24" />
    </div>
  );
}

