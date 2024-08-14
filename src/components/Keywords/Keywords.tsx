import { KeywordBox } from "../KeywordBox/KeywordBox";
import type { KeywordsProps } from "./types";

export function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="keywords-con">
      <span className="label mb-2 block text-center text-sm font-bold">
        Keywords
      </span>
      <div className="inner-con">
        <div className="boxes-con flex min-h-12 flex-wrap gap-2 rounded-sm border border-gray-600 bg-gray-800 p-1 text-sm">
          {keywords.map((item, index) => {
            return <KeywordBox key={index} value={item} id={index} />;
          })}
        </div>
        <div className="limit-con flex justify-end">
          <p className="text mt-2 text-sm text-gray-400">
            <span className="rm text-pink-500">0</span>/10
          </p>
        </div>
      </div>
    </div>
  );
}
