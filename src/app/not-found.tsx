import { Button } from '@/components/ui/Button';
import { GlowDot } from '@/components/ui/GlowDot';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <GlowDot color="primary" size={500} style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div className="relative z-10 text-center">
        <p className="mb-2 font-mono text-sm font-medium tracking-widest text-accent-primary uppercase">
          404
        </p>
        <h1 className="mb-4 text-6xl font-bold text-text-primary sm:text-7xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          Looks like you wandered into the void. Let&apos;s get you back.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
