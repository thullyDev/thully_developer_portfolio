import { CloseBtn } from "../CloseBtn/CloseBtn";

export function AboutMe() {
  return (
    <div id="about_me" data-open="false" className="about-me hidden">
      <div className="layer-1-about-me fixed left-0 top-0 z-50 h-full w-full bg-black/75 backdrop-blur-sm">
        <div className="layer-2-about-me flex h-full w-full items-center justify-center p-4">
          <div className="layer-3-about-me glass-panel relative w-full max-w-lg rounded-2xl border border-white/10 px-6 py-6 text-sm leading-relaxed shadow-glow md:px-8 md:py-8 md:text-base">
            <CloseBtn element=".about-me" animate="fade" />
            <p className="mb-1 text-center text-xs font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mb-4 text-center text-xl font-bold text-gray-100">
              Hey, I&apos;m{" "}
              <span className="section-heading-accent">Thulaganyo Mooki</span>
            </h2>
            <p className="mb-4 text-center text-gray-300">
              I&apos;m a developer from{" "}
              <span className="font-medium text-gray-100">South Africa</span>.
              I&apos;ve been coding since high school, and today I build{" "}
              <em className="text-pink-400">fast, polished frontends</em> with{" "}
              <strong className="text-gray-100">Astro</strong>,{" "}
              <strong className="text-gray-100">React</strong>, and{" "}
              <strong className="text-gray-100">TypeScript</strong> — plus{" "}
              <strong className="text-gray-100">Rust</strong> and{" "}
              <strong className="text-gray-100">Tauri</strong> when I want
              snappy desktop-style apps.
            </p>

            <p className="mb-4 text-center text-gray-300">
              I&apos;m into <strong className="text-gray-100">anime</strong> and{" "}
              <strong className="text-gray-100">games</strong>, so a lot of my
              projects are{" "}
              <a
                href="/projects"
                className="font-medium text-pink-400 underline-offset-2 hover:underline"
              >
                manga and anime sites
              </a>{" "}
              where UI performance and feel matter as much as the features.
            </p>

            <p className="text-center text-gray-300">
              Always up for interesting work or collabs — say hi at{" "}
              <a
                href="mailto:thulaganyo.mooki.pro@gmail.com"
                className="font-medium text-pink-400 underline-offset-2 hover:underline"
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
