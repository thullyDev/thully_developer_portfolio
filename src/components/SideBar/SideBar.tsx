import type { SideBarProps } from "./types";

export function SideBar({
  userName,
  profileImageUrl,
  fullName,
  profileDescription,
  donateSlug,
  donateLink,
}: SideBarProps) {
  return (
    <div className="side-bar">
      <article>
        <div className="inner-con">
          <div className="profile-con">
            <div className="inner-con">
              <img
                src={profileImageUrl}
                alt={userName}
                className="profile-image"
              />
            </div>
          </div>
          <div className="name-details-con">
            <span className="name-con">
              <h2 className="username">{userName}</h2>
              <p className="fullname">{fullName}</p>
            </span>
            <span className="details-con">
              <h3 className="role">fullstack developer</h3>
              <span className="short-desc-con">
                <p className="short-desc">{profileDescription}</p>
              </span>
            </span>
          </div>
          <div className="login-donate-acts-con">
            <a href={donateLink} className="donate-link">
              <img
                src={`https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=${donateSlug}&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00`}
                alt=""
                className="donate-image"
              />
            </a>
            <button type="button" className="login-logout-btn">
              login
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
