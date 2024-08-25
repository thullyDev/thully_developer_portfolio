import { showCloseEle } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";

const navLinks = [
  {
    name: "projects",
    link: "/projects",
    icon: "fas fa-project-diagram",
  },
  {
    name: "contact me",
    link: "/#contact_me",
    icon: "fas fa-envelope",
  },
  {
    name: "about me",
    link: "/#about_me",
    icon: "fas fa-user",
  },
] as const;

export function Nav() {
  return (
    <nav className="main-nav my-5">
      <ul className="nav-list flex justify-around gap-5">
        {navLinks.map(({ name, link, icon }, index) => {
          if (name == "about me") {
            return (
              <button
                key={index}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => showCloseEle({event})}
                data-element=".about-me"
                data-animate="fade"
                className="nav-link flex items-center justify-center gap-2 text-sm font-bold capitalize text-gray-400"
              >
                <Icon icon={icon} /> {name}
              </button>
            );
          }

          return (
            <li key={index} className="nav-item">
              <a
                href={link}
                className="nav-link flex items-center justify-center gap-2 text-sm font-bold capitalize text-gray-400"
              >
                <Icon icon={icon} /> {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
