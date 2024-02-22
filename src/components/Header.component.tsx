import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiMenu } from "react-icons/hi";
import clsx from "clsx";

const routes = [
  { route: "/", label: "Home" },
  { route: "/about", label: "Chi siamo" },
  { route: "/contact", label: "Contattaci" },
  { route: "/news", label: "Ultime notizie" },
];

const HeaderLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to} className="text-white uppercase px-8 py-2 relative">
      {children}
    </Link>
  );
};

const HeaderLinks = ({
  routes,
  column = false,
}: {
  routes: { route: string; label: string }[];
  column?: boolean;
}) => {
  return (
    <div
      className={clsx("flex justify-center items-center", {
        "flex-col": column,
      })}
    >
      {routes.map((r: { route: string; label: string }, index: number) => (
        <HeaderLink key={index} to={r.route}>
          {r.label}
        </HeaderLink>
      ))}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="flex justify-center items-center sticky top-0 w-full h-16 bg-emerald-800 z-10 p-4 opacity-90">
      {!isMobile && (
        <nav className="font-serif">
          <HeaderLinks routes={routes} />
        </nav>
      )}

      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex-wrap md:hidden absolute right-4 top-4 z-10"
        >
          <HiMenu className="text-white text-3xl" />
        </button>
      )}

      {isMobile && isMenuOpen && (
        <nav className="fixed top-0 left-0 h-fit w-full bg-emerald-800 flex flex-col justify-around m-0 py-5 mt-8">
          <HeaderLinks routes={routes} column />
        </nav>
      )}
    </header>
  );
};

export default Header;
