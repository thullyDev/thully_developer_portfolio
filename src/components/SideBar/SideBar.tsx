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
    <div className="side-bar p-5">
      <article>
        <div className="inner-con mb-5 flex flex-col gap-5">
          <div className="profile-con flex justify-center">
            <div className="inner-con">
              <a href="/" target="_blank" title="home" className="home-link">
                <img
                  src={profileImageUrl}
                  alt={userName}
                  className="profile-image h-64 w-64 rounded-full border border-zinc-300"
                />
              </a>
            </div>
          </div>
          <div className="name-details-con flex flex-col justify-center gap-2">
            <span className="name-con flex flex-col gap-1">
              <h2 className="username text-4xl font-bold">
                <a href="/profile" target="_blank">
                  {userName}
                </a>
              </h2>
              <span className="fullname-role flex gap-2">
                <p className="fullname text-nowrap font-bold text-gray-500">
                  {fullName}
                </p>
                <p className="role text-nowrap font-bold capitalize text-pink-500">
                  {role}
                </p>
              </span>
            </span>
            <span className="sidebar-github-link-con my-5 flex flex-col gap-2 text-center">
              <a
                href={githubLink}
                target="_blank"
                className="text-sm text-gray-400 underline"
              >
                <Icon icon="fab fa-github" /> {githubLink}
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="text-sm text-gray-400 underline"
              >
                <Icon icon="fa fa-envelope" /> {email}
              </a>
            </span>
            <span className="details-con flex flex-col gap-3">
              <span className="short-desc-con">
                <p className="short-desc text-center text-sm">
                  {profileDescription}
                </p>
              </span>
            </span>
          </div>
          <div className="login-donate-acts-con flex justify-around">
            <a href={donateLink} className="donate-link">
              <img
                src={`https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=${donateSlug}&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00`}
                alt=""
                className="donate-image w-40"
              />
            </a>
            <button
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => showCloseEle({event})}
              data-element=".outer-auth-con"
              data-animate="fade"
              className={`login-logout-btn w-20 rounded-md bg-pink-500 text-xs text-white hover:bg-gray-500 ${trans500} font-bold capitalize`}
            >
              login
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
