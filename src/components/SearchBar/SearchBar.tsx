import { Icon } from "../Icon/Icon";

export function SearchBar() {
	return (
		<div className="search-bar-con">
			<div className="inner-search-bar-con">
				<button className="clear-btn">
					clear
				</button>
				<input type="text" className="search-bar" />
				<button className="search-btn">
					<Icon icon="fa fa-search" />
				</button>
			</div>
			<button className="mobile-search-btn">
				<Icon icon="fa fa-search" />
			</button>
		</div>
	)
}