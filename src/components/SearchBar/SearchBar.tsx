import { FilterBox } from "../FilterBox/FilterBox";
import { Icon } from "../Icon/Icon";
import type { SearchBarProps } from "./types";

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
    <div className="main flex gap-4 bg-gray-800 py-1 px-3 w-full rounded border text-gray-400 border-gray-600">
      <button className="clear-btn text-xs bg-pink-500 px-2 text-white rounded">
        clear
      </button>
      <input
        type="text"
        placeholder="search..."
        className="search-bar w-full bg-inherit text-sm"
      />
      <span className="search-filter-con text-xs flex justify-center items-center gap-2">
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
