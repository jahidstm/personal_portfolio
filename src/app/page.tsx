import { GlowDot } from '@/components/ui/GlowDot';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient glow decorations */}
      <GlowDot color="primary" size={600} style={{ top: '-100px', left: '-150px' }} />
      <GlowDot color="secondary" size={400} style={{ top: '200px', right: '-100px' }} />

      {/* Sections will be assembled here in Phase 2 & 3 */}
      {/* Hero Section placeholder */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-sm text-accent-primary mb-4 tracking-widest uppercase">
            Portfolio under construction
          </p>
          <h1 className="text-5xl font-bold text-text-primary mb-4">
            Jahid Hasan
          </h1>
          <p className="text-xl text-text-secondary">
            Data Analyst | Aspiring AI/ML Engineer
          </p>
        </div>
      </section>

      {/* About section placeholder */}
      <section id="about" className="min-h-screen px-6 py-24" />

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
