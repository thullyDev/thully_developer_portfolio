import ReactMarkdown from "react-markdown";
import type { ProjectReadMeProps } from "./types";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import "./styles.scss";

const allowedTags = [
  "a",
  "img",
  "p",
  "strong",
  "em",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
];
const allowedAttributes = {
  a: ["href", "target", "rel"],
  img: ["src", "alt"],
  p: ["align"],
};

function stripDuplicateTitle(markdown: string, projectName?: string): string {
  if (!projectName) return markdown;

  const lines = markdown.split("\n");
  const first = lines[0]?.trim() ?? "";
  const titlePattern = new RegExp(
    `^#\\s*${projectName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
    "i",
  );

  if (titlePattern.test(first)) {
    return lines.slice(1).join("\n").trimStart();
  }

  return markdown;
}

export function ProjectReadMe({
  full_name,
  default_branch,
  projectName,
}: ProjectReadMeProps) {
  const [markdown, setMarkdown] = useState("");
  const README_URL = `https://raw.githubusercontent.com/${full_name}/${default_branch}/README.md`;

  useEffect(() => {
    fetch(README_URL)
      .then((response) => response.text())
      .then((text) => {
        if (text.includes("400: Invalid request")) {
          setMarkdown("No README.md for this project");
        } else {
          setMarkdown(stripDuplicateTitle(text, projectName));
        }
      });
  }, [full_name, default_branch, projectName]);

  if (!markdown) {
    return (
      <div className="project-readme glass-panel rounded-2xl p-6 text-sm text-gray-400">
        Loading README…
      </div>
    );
  }

  return (
    <section className="project-readme glass-panel rounded-2xl border border-white/8">
      <div className="inner-con p-6 md:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-pink-400">
          README
        </p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            // @ts-ignore
            rehypeSanitize({
              // @ts-ignore
              tags: allowedTags,
              attributes: allowedAttributes,
            }),
          ]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}
