import { trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { FooterProps } from "./types";

export function Footer({ sideFooterImg, socialLinks }: FooterProps) {
  return (
    <footer className="mt-8 border-t border-white/5 px-4 pb-10 pt-8 md:px-8">
      <div className="socials-con flex justify-center">
        <div className="glass-panel inner-con flex flex-col items-center gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:gap-6">
          <span className="footer-side-img-con shrink-0">
            <img
              src={sideFooterImg}
              alt=""
              className="side-img h-14 w-14 rounded-full border border-white/10 object-cover"
            />
          </span>
          <div className="social-links-con">
            <ul id="contact_me" className="socials-list flex flex-wrap justify-center gap-4 sm:gap-5">
              {socialLinks.map(({ name, link, icon }, index) => {
                return (
                  <li key={index} className="social-item">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className={`social-link flex flex-col items-center gap-1 text-gray-400 transition hover:text-pink-400 ${trans500}`}
                    >
                      <Icon icon={icon} />
                      <p className="text-xs font-medium">{name}</p>
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
