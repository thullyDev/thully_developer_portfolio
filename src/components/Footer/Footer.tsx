import { Icon } from "../Icon/Icon";
import type { FooterProps } from "./types";

export function Footer({ sideFooterImg, socialLinks }: FooterProps) {
  return (
    <footer>
      <div className="socials-con flex justify-center my-5">
        <div className="inner-con bg-gray-600 flex justify-center items-center gap-5 px-3 py-1 rounded-full">
          <span className="footer-side-img-con">
            <img src={sideFooterImg} alt="side image" className="side-img w-14 h-15 rounded-full border border-zinc-400" />
          </span>
          <div className="social-links-con">
            <ul className="socials-list flex gap-3">
              {socialLinks.map(({ name, link, icon }, index) => {
                return (
                  <li key={index} className="social-item">
                    <a href={link} className="social-link flex flex-col items-center gap-1 text-sm">
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

