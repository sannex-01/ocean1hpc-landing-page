import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="d-flex align-items-center justify-content-center"
      style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--color-muted)'
      }}
    >
      <div className="text-center">
        <h1 className="mb-4 display-4 fw-bold">404</h1>
        <p className="mb-4 fs-5" style={{ color: 'var(--color-foreground)' }}>
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="text-decoration-underline"
          style={{ color: 'var(--color-primary)' }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
