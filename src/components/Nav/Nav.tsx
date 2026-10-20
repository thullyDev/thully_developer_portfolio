import { showCloseEle, trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";

const navLinks = [
  {
    name: "home",
    link: "/",
    icon: "fas fa-home",
  },
  {
    name: "projects",
    link: "/projects",
    icon: "fas fa-project-diagram",
  },
  {
    name: "contact",
    link: "/#contact_me",
    icon: "fas fa-envelope",
  },
  {
    name: "about",
    link: "/#about_me",
    icon: "fas fa-user",
    action: "about" as const,
  },
] as const;

export function Nav() {
  return (
    <nav className="main-nav glass-panel mx-auto mb-2 mt-4 max-w-2xl rounded-2xl px-4 py-3">
      <ul className="nav-list flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {navLinks.map(({ name, link, icon, ...rest }, index) => {
          if ("action" in rest && rest.action === "about") {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    showCloseEle({ event })
                  }
                  data-element=".about-me"
                  data-animate="fade"
                  className={`nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium capitalize text-gray-400 transition hover:bg-white/5 hover:text-pink-400 ${trans500}`}
                >
                  <Icon icon={icon} /> {name}
                </button>
              </li>
            );
          }

          return (
            <li key={index} className="nav-item">
              <a
                href={link}
                className={`nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium capitalize text-gray-400 transition hover:bg-white/5 hover:text-pink-400 ${trans500}`}
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
