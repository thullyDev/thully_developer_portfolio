import { Icon } from "../Icon/Icon";

export function GithubAnalytics() {
  return (
    <section className="github-analytics-con mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="left-side flex-1">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Activity
        </p>
        <a
          href="https://github.com/thullyDev"
          target="_blank"
          rel="noreferrer"
          className="github-link flex flex-col gap-4"
        >
          <img
            className="w-full rounded-xl border border-white/8 shadow-card"
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=thullyDev&theme=dracula"
            alt="GitHub profile details"
          />
          <img
            className="w-full max-w-lg rounded-xl border border-white/8 shadow-card"
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=thullyDev&show_icons=true&include_all_commits=true&count_private=false&theme=dracula"
            alt="GitHub stats"
          />
        </a>
      </div>
      <div className="right-side flex flex-1 flex-col items-center lg:max-w-sm">
        <a
          href="https://github.com/thullyDev"
          target="_blank"
          rel="noreferrer"
          className="github-link flex w-full flex-col items-center gap-4 rounded-2xl border border-white/8 bg-surface-card p-5 shadow-card transition hover:border-pink-500/30"
        >
          <span className="github-link-con flex items-center gap-2 text-lg font-semibold text-gray-200">
            <Icon icon="fa-brands fa-github-square" /> GitHub profile
          </span>
          <img
            className="w-full rounded-lg"
            src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=thullyDev&layout=compact&langs_count=8&theme=dracula"
            alt="Top languages"
          />
        </a>
      </div>
    </section>
  );
}
