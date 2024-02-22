import { Link } from "react-router-dom";

const HeaderLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to} className="text-white uppercase px-8 relative">
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 w-full h-16 bg-emerald-800 z-10 p-4">
      <nav className="font-serif">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/services">Services</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
