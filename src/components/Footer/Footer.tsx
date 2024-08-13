import { Icon } from "../Icon/Icon";
import type { FooterProps } from "./types";

export function Footer({ sideFooterImg, socialLinks }: FooterProps) {
  return (
    <footer>
      <div className="socials-con flex justify-center py-5">
        <div className="inner-con flex items-center justify-center gap-5 rounded-full bg-gray-600 px-3 py-1">
          <span className="footer-side-img-con">
            <img
              src={sideFooterImg}
              alt="side image"
              className="side-img h-15 w-14 rounded-full border border-zinc-400"
            />
          </span>
          <div className="social-links-con">
            <ul id="contact_me" className="socials-list flex gap-3">
              {socialLinks.map(({ name, link, icon }, index) => {
                return (
                  <li key={index} className="social-item">
                    <a
                      href={link}
                      className="social-link flex flex-col items-center gap-1 text-sm"
                    >
                      <Icon icon={icon} />
                      <p className="text-xs">{name}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
