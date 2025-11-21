import heroBackground from "@/assets/hero-background.jpg";
import planet from "@/assets/planet.png";

const Hero = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image */}
      <div 
        className="position-absolute top-0 start-0 bottom-0 end-0"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 bottom-0 end-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(61, 79, 95, 0.9), rgba(61, 79, 95, 0.7), rgba(61, 79, 95, 0.9))'
          }}
        />
      </div>

      {/* Planet Decoration */}
      <div 
        className="position-absolute d-none d-lg-block"
        style={{ 
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '800px',
          height: '800px',
          opacity: 0.6,
          pointerEvents: 'none',
          backgroundImage: `url(${planet})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right'
        }}
      />

      {/* Content */}
      <div 
        className="position-relative container-xxl"
        style={{ zIndex: 10, padding: '6rem 3rem' }}
      >
        <div style={{ maxWidth: '48rem' }}>
          <h1 
            className="fw-bold mb-4"
            style={{ 
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              lineHeight: 1.1,
              color: '#e5f1f8',
              fontFamily: 'var(--bs-font-monospace)'
            }}
          >
            Frontier Computing for
            <br />
            Minimal Resources
          </h1>
          <p 
            className="mb-4"
            style={{ 
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: 'var(--color-muted)',
              maxWidth: '42rem',
              lineHeight: 1.6
            }}
          >
            We are a high-performance computing lab building powerful efficient systems for edge
            applications.
          </p>
          <button 
            className="btn btn-lg d-inline-flex align-items-center gap-2 position-relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(247, 250, 251, 0.1)',
              color: '#e5f1f8',
              border: '1px solid rgba(138, 155, 176, 0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(247, 250, 251, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(138, 155, 176, 0.5)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) (arrow as HTMLElement).style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(247, 250, 251, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(138, 155, 176, 0.3)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
            }}
          >
            Get in touch
            <svg 
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ transition: 'transform 0.3s' }}
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="position-absolute bottom-0 start-0 end-0"
        style={{ zIndex: 10, padding: '2rem 3rem' }}
      >
        <div className="container-xxl d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0" style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
            Email: info@ocean1hpc.com
          </p>
          <p className="mb-0" style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
            © 2025 Ocean1 HPC. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
