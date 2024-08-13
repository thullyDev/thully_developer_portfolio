import { FilterBox } from "../FilterBox/FilterBox";
import { Icon } from "../Icon/Icon";
import type { SearchBarProps } from "./types";
import "./styles.scss";

export function SearchBar({ tags, checkedBoxes }: SearchBarProps) {
  return (
    <div className="search-bar-con mb-5">
      <div className="bottom-con">
        <div className="inner-search-bar-con">
          <MainSearch />
        </div>
        {/*<MobileSearchBtns />*/}
      </div>
      <FilterBox tags={tags} checkedBoxes={checkedBoxes} />
    </div>
  );
}

function MainSearch() {
  return (
    <div className="main flex w-full gap-4 rounded border border-gray-600 bg-gray-800 px-3 py-1 text-gray-400">
      <button className="clear-btn rounded bg-pink-500 px-2 text-xs text-white">
        clear
      </button>
      <input
        type="text"
        placeholder="search..."
        className="search-bar w-full bg-inherit text-sm"
      />
      <span className="search-filter-con flex items-center justify-center gap-2 text-xs">
        <button className="search-btn">
          <Icon icon="fa fa-search" />
        </button>
        <button className="filter-btn">
          <Icon icon="fa fa-filter" />
        </button>
      </span>
    </div>
  );
}

// function MobileSearchBtns() {
//   return (
//     <div className="mobile-con">
//       <button className="mobile-search-btn">
//         <Icon icon="fa fa-search" />
//       </button>
//       <button className="filter-btn">
//         <Icon icon="fa fa-filter" /> filter
//       </button>
//     </div>
// )

// }
