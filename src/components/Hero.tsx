import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import planet from "@/assets/planet.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/90" />
      </div>

      {/* Planet Decoration */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-60 pointer-events-none hidden lg:block"
        style={{ 
          backgroundImage: `url(${planet})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent-foreground leading-tight font-mono">
            Frontier Computing for
            <br />
            Minimal Resources
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl leading-relaxed">
            We are a high-performance computing lab building powerful efficient systems for edge
            applications.
          </p>
          <Button 
            size="lg"
            className="group bg-secondary-foreground/10 text-accent-foreground border border-muted/30 hover:bg-secondary-foreground/20 hover:border-muted/50 backdrop-blur-sm transition-all"
          >
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>Email: info@ocean1hpc.com</p>
          <p>© 2025 Ocean1 HPC. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
