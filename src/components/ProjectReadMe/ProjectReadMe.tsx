import ReactMarkdown from "react-markdown";
import type { ProjectReadMeProps } from "./types";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import "./styles.scss";

// Define allowed tags and attributes for rehype-sanitize
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
];
const allowedAttributes = {
  a: ["href", "target", "rel"],
  img: ["src", "alt"],
  p: ["align"],
};

export function ProjectReadMe({ full_name }: ProjectReadMeProps) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${full_name}/main/README.md`)
      .then((response) => response.text())
      .then((text) => {
        if (text.includes("400: Invalid request")) {
          setMarkdown("No README.md for this project");
        } else {
          setMarkdown(text);
        }
      });
  }, [full_name]);

  return (
    <div className="project-readme">
      <div className="inner-con">
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
    </div>
  );
}
