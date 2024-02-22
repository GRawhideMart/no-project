import { Link } from "react-router-dom";

const routes = [
  { route: "/", label: "Home" },
  { route: "/about", label: "Chi siamo" },
  { route: "/contact", label: "Contattaci" },
  { route: "/news", label: "Ultime notizie" },
];

const HeaderLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <Link to={to} className="text-white uppercase px-8 relative">
      {children}
    </Link>
  );
};

const HeaderLinks = ({
  routes,
}: {
  routes: { route: string; label: string }[];
}) => {
  return (
    <div className="flex justify-center items-center">
      {routes.map((r: { route: string; label: string }, index: number) => (
        <HeaderLink key={index} to={r.route}>
          {r.label}
        </HeaderLink>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 w-full h-16 bg-emerald-800 z-10 p-4 opacity-90">
      <nav className="font-serif">
        <HeaderLinks routes={routes} />
      </nav>
    </header>
  );
};

export default Header;
