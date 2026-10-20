import { showCloseEle, trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { SideBarProps } from "./types";

export function SideBar({
  userName,
  profileImageUrl,
  fullName,
  githubLink,
  email,
  profileDescription,
  donateSlug,
  donateLink,
  role,
}: SideBarProps) {
  return (
    <div className="side-bar p-5 md:p-6">
      <article>
        <div className="inner-con flex flex-col gap-6">
          <div className="profile-con flex justify-center">
            <a href="/" title="Home" className="home-link group relative block">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500/40 to-violet-500/30 opacity-75 blur-md transition group-hover:opacity-100" />
              <img
                src={profileImageUrl}
                alt={userName}
                className="relative h-48 w-48 rounded-full border-2 border-white/10 object-cover shadow-glow md:h-56 md:w-56"
              />
            </a>
          </div>
          <div className="name-details-con flex flex-col justify-center gap-3 text-center">
            <span className="name-con flex flex-col gap-1">
              <h2 className="username text-3xl font-bold tracking-tight md:text-4xl">
                {userName}
              </h2>
              <span className="fullname-role flex flex-wrap items-center justify-center gap-2">
                <p className="fullname text-nowrap text-sm font-medium text-gray-400">
                  {fullName}
                </p>
                <span className="h-1 w-1 rounded-full bg-gray-600" />
                <p className="role text-nowrap text-sm font-semibold capitalize text-accent">
                  {role}
                </p>
              </span>
            </span>
            <span className="sidebar-github-link-con flex flex-col gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 text-sm text-gray-400 transition hover:text-pink-400 ${trans500}`}
              >
                <Icon icon="fab fa-github" />
                <span className="truncate">{githubLink.replace("https://", "")}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className={`inline-flex items-center justify-center gap-2 text-sm text-gray-400 transition hover:text-pink-400 ${trans500}`}
              >
                <Icon icon="fa fa-envelope" />
                {email}
              </a>
            </span>
            <p className="short-desc mx-auto max-w-xs text-sm leading-relaxed text-gray-500">
              {profileDescription}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a href={donateLink} target="_blank" rel="noreferrer" className="donate-link">
              <img
                src={`https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=${donateSlug}&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00`}
                alt="Buy me a coffee"
                className="donate-image w-44"
              />
            </a>
            <button
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                showCloseEle({ event })
              }
              data-element=".about-me"
              data-animate="fade"
              className={`w-full max-w-xs rounded-xl border border-white/10 bg-surface-card px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-pink-500/40 hover:bg-surface-raised ${trans500}`}
            >
              About me
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
