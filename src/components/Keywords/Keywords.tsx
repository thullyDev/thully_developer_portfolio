import { KeywordBox } from "../KeywordBox/KeywordBox";
import type { KeywordsProps } from "./types";

export function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="keywords-con">
      <span className="label text-center text-sm font-bold block mb-2">
        Keywords
      </span>
      <div className="inner-con">
        <div className="boxes-con min-h-12 p-1 bg-gray-800 border border-gray-600 rounded-sm flex flex-wrap text-sm gap-2">
          {keywords.map((item, index) => {
            return <KeywordBox key={index} value={item} id={index} />;
          })}
        </div>
        <div className="limit-con flex justify-end">
          <p className="text text-sm mt-2 text-gray-400">
          <span className="rm text-pink-500">0</span>/10
          </p>
        </div>
      </div>
    </div>
  );
}
