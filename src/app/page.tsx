import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience section placeholder */}
      <section id="experience" className="min-h-screen px-6 py-24" />

      {/* Contact section placeholder */}
      <section id="contact" className="min-h-screen px-6 py-24" />
    </div>
  );
}

