import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <a 
          href="#careers" 
          className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
        >
          Careers
        </a>
      </div>
    </header>
  );
};

export default Header;
