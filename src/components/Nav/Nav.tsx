const navLinks = [
  {
    name: "projects",
    link: "/projects",
  },
  {
    name: "contact me",
    link: "/#contact_me",
  },
  {
    name: "about me",
    link: "/#about_me",
  },
] as const;

export function Nav() {
  return (
    <nav className="main-nav">
      <ul className="nav-lis">
        {navLinks.map(({ name, link }, index) => {
          return (
            <li key={index} className="nav-item">
              <a href={link} className="nav-link">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
