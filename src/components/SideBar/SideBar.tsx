import { trans500 } from "../../utilities/misc";
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
        <div className="inner-con flex gap-5 flex-col mb-5">
          <div className="profile-con flex justify-center">
            <div className="inner-con">
              <a href="/profile" title="profile" className="profile-link">
                <img
                  src={profileImageUrl}
                  alt={userName}
                  className="profile-image w-64 h-64 border border-zinc-300 rounded-full"
                />
              </a>
            </div>
          </div>
          <div className="name-details-con flex flex-col justify-center gap-2">
            <span className="name-con flex gap-1 flex-col">
              <h2 className="username font-bold text-4xl">{userName}</h2>
              <span className="fullname-role flex gap-2">
                <p className="fullname font-bold text-gray-500 text-nowrap">
                  {fullName}
                </p>
                <p className="role text-pink-500 capitalize font-bold text-nowrap">
                  {role}
                </p>
              </span>
            </span>
            <span className="sidebar-github-link-con text-center flex flex-col my-5 gap-2">
              <a href={githubLink} target="_blank" className="text-gray-400 text-sm underline">
                <Icon icon="fab fa-github" /> {githubLink}
              </a>
              <a href={`mailto:${email}`} target="_blank" className="text-gray-400 text-sm underline">
                <Icon icon="fa fa-envelope" /> {email}
              </a>
            </span>
            <span className="details-con flex flex-col gap-3">
              <span className="short-desc-con">
                <p className="short-desc text-sm text-center">
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
              className={`login-logout-btn bg-pink-500 hover:bg-gray-500 w-20 text-xs rounded-md text-white ${trans500} capitalize font-bold`}
            >
              login
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
