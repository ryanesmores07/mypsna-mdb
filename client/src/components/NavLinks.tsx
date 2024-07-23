import { links, jpLinks } from "@/utils";
import { NavLink } from "react-router-dom";
import { getUserLanguage } from '../lib/languageDetect';

function NavLinks() {
  const userLanguage = getUserLanguage();
  let languageLinks;
  const isJp = userLanguage === "ja";
  {isJp ? (languageLinks = jpLinks) : (languageLinks = links)};
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {languageLinks.map((link) => {
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
            key={link.label}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks;
