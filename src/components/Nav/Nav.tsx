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
          return (
            <li key={index} className="nav-item">
              <a href={link} className="nav-link capitalize font-bold text-gray-400 text-sm flex gap-2 items-center justify-center">
                <Icon icon={icon} /> {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
