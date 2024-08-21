import { Icon } from "../Icon/Icon";

export function GithubAnalytics() {
  return (
    <div className="github-analytics-con mb-5 flex flex-col gap-5">
      <div className="left-side">
        <div className="inner-con">
          <a
            href="https://github.com/thullyDev"
            target="_blank"
            className="github-link flex flex-col items-center gap-5"
          >
            <img
              className="w-full max-w-md"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=thullyDev&theme=dracula"
              alt="Top languages"
            />
            <img
              className="w-full max-w-96"
              src="https://github-readme-stats-eight-theta.vercel.app/api?username=thullyDev&show_icons=true&include_all_commits=true&count_private=false&theme=dracula"
              alt="Profile summary"
            />
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="inner-con">
          <a
            href="https://github.com/thullyDev"
            target="_blank"
            className="github-link flex flex-col items-center justify-center gap-4"
          >
            <span className="github-link-con flex items-center justify-center gap-2">
              <Icon icon="fa-brands fa-github-square" /> My github
            </span>
            <img
              className="w-full max-w-80"
              src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=thullyDev&layout=compact&langs_count=8&theme=dracula"
              alt="Top languages"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
