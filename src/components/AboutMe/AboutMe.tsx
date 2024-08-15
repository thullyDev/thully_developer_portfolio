import { CloseBtn } from "../CloseBtn/CloseBtn";
import { Icon } from "../Icon/Icon";

export function AboutMe() {
  return (
    <div id="about_me" className="about-me hidden">
      <span role="button" className="text-label">
        <h3 className="pointer text-pink-500 underline">
          {" "}
          <Icon icon="fas fa-caret-right" /> About Me
        </h3>
      </span>
      <div className="layer-1-about-me fixed left-0 top-0 hidden h-full w-full bg-black bg-opacity-70">
        <div className="layer-2-about-me flex h-full w-full items-center justify-around">
          <div className="layer-3-about-me w-full max-w-96 rounded-sm border border-gray-500 bg-gray-800 px-5 py-3 text-sm">
            <CloseBtn />
            <p className="text-center">
              Hey there, I'm{" "}
              <strong className="text-pink-500">Thulaganyo Mooki</strong>, a{" "}
              <em className="text-pink-500">full stack developer</em> from{" "}
              <span className="location">South Africa</span>. I've been into
              coding since high school, starting out in grade 10, and now I
              focus mostly on backend development. I'm really into{" "}
              <strong>anime</strong> and <strong>games</strong>, so I've
              combined those passions with my tech skills to create some cool{" "}
              <a href="#projects" className="project-link">
                manga and anime websites
              </a>
              .
            </p>

            <p className="text-center">
              I'm always looking for new ways to grow and work on exciting
              projects. If you want to connect or have something in mind, feel
              free to reach out at{" "}
              <a
                href="mailto:thulaganyo.mooki.pro@gmail.com"
                className="email-link text-pink-500 underline"
              >
                thulaganyo.mooki.pro@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
