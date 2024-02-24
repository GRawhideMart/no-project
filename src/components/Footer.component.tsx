import { GrInstagram } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white p-10 text-center">
      <div className="container mx-auto">
        <p className="font-serif">
          &copy; {new Date().getFullYear()} Martena Gnalogia & Postura. All
          Rights Reserved.
        </p>
        <ul className="flex justify-center mt-4 space-x-6">
          <li>
            <a
              href="https://www.facebook.com/CDOdottMartena"
              target="_blank"
              rel="noreferrer"
            >
              <MdFacebook className="text-3xl" />
            </a>
          </li>
          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/martenagnatologia/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
