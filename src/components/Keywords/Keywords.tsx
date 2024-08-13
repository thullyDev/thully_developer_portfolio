import { KeywordBox } from "../KeywordBox/KeywordBox";
import type { KeywordsProps } from "./types";

export function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="keywords-con">
      <div className="inner-con">
        <div className="boxes-con">
          {keywords.map((item, index) => {
            return <KeywordBox key={index} value={item} id={index} />;
          })}
        </div>
        <div className="limit-con">
          <p className="text">
            remaining: <span className="rm">0</span>/10
          </p>
        </div>
      </div>
    </div>
  );
}
