import React, { Component } from "react";
import "./tableSubHeader.css";
import SearchBox from "./../searchBox";

class TableSubHeader extends Component {
	render() {
		const {
			nameSearchQuery,
			handleNameSearch,
			instituteSearchQuery,
			handleInstituteSearch,
			countrySearchQuery,
			handleCountrySearch,
			subjectSearchQuery,
			handleSubjectSearch,
		} = this.props;

		return (
			<div className="sub_heading_container">
				<div className="sub_heading_1 table_sub_heading">
					<SearchBox
						value={nameSearchQuery}
						onChange={handleNameSearch}
						placeholderText="Search Names..."
					/>
				</div>
				<div className="sub_heading_2 table_sub_heading">
					<SearchBox
						value={instituteSearchQuery}
						onChange={handleInstituteSearch}
						placeholderText="Search Institutes..."
					/>
				</div>
				<div className="sub_heading_3 table_sub_heading">
					<SearchBox
						value={countrySearchQuery}
						onChange={handleCountrySearch}
						placeholderText="Filter..."
					/>
				</div>
				<div className="sub_heading_4 table_sub_heading"></div>
				<div className="sub_heading_5 table_sub_heading"></div>
				<div className="sub_heading_6 table_sub_heading"></div>
				<div className="sub_heading_7 table_sub_heading"></div>
				<div className="sub_heading_8 table_sub_heading">
					<SearchBox
						value={subjectSearchQuery}
						onChange={handleSubjectSearch}
						placeholderText="Search Subject Fields..."
					/>
				</div>
				<div className="sub_heading_9 table_sub_heading"></div>
				<div className="sub_heading_10 table_sub_heading"></div>
			</div>
		);
	}
}

export default TableSubHeader;
