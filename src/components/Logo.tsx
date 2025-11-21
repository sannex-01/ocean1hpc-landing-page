const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div 
        className="border border-2 border-primary rounded d-flex align-items-center justify-content-center"
        style={{ width: '32px', height: '32px' }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="var(--color-primary)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="16" height="16" x="4" y="4" rx="2"/>
          <rect width="6" height="6" x="9" y="9" rx="1"/>
          <path d="M15 2v2"/>
          <path d="M15 20v2"/>
          <path d="M2 15h2"/>
          <path d="M2 9h2"/>
          <path d="M20 15h2"/>
          <path d="M20 9h2"/>
          <path d="M9 2v2"/>
          <path d="M9 20v2"/>
        </svg>
      </div>
      <span className="fs-5 fw-semibold" style={{ color: 'var(--color-foreground)' }}>Ocean1 HPC</span>
    </div>
  );
};

export default Logo;
