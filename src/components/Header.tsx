import Logo from "./Logo";

const Header = () => {
  return (
    <header 
      className="position-fixed top-0 start-0 end-0" 
      style={{ 
        zIndex: 50, 
        padding: '1.5rem 3rem'
      }}
    >
      <div className="container-xxl d-flex align-items-center justify-content-between">
        <Logo />
        <a 
          href="#careers" 
          className="text-decoration-none text-uppercase fw-medium"
          style={{ 
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            color: 'var(--color-foreground)',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground)'}
        >
          Careers
        </a>
      </div>
    </header>
  );
};

export default Header;
