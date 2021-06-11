import React, { Component } from "react";
import "./tableHeader.css";

class TableHeader extends Component {
	raiseSort = (path) => {
		const sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path)
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		else {
			sortColumn.path = path;
			sortColumn.order = "asc";
		}
		this.props.onSort(sortColumn);
	};

	render() {
		return (
			<thead>
				<tr>
					<th
						onClick={() => this.raiseSort("Author Name")}
						className="clickable table_heading heading_1"
					>
						Name
					</th>
					<th
						onClick={() => this.raiseSort("Institute Name")}
						className="clickable table_heading heading_2"
					>
						Institute
					</th>
					<th
						onClick={() => this.raiseSort("Country")}
						className="clickable table_heading heading_3"
					>
						Country
					</th>
					<th
						onClick={() => this.raiseSort("Number of Papers")}
						className="clickable table_heading heading_4"
					>
						Papers
					</th>
					<th
						onClick={() => this.raiseSort("firstyr")}
						className="clickable table_heading heading_5"
					>
						First Yr.
					</th>
					<th
						onClick={() => this.raiseSort("lastyr")}
						className="clickable table_heading heading_6"
					>
						Last Yr.
					</th>
					<th
						onClick={() => this.raiseSort("c score")}
						className="clickable table_heading heading_7"
					>
						C Score
					</th>
					<th
						onClick={() => this.raiseSort("Subject Field")}
						className="clickable table_heading heading_8"
					>
						Subject Field
					</th>
					<th
						onClick={() => this.raiseSort("Rank within field")}
						className="clickable table_heading heading_9"
					>
						Rank Within Field
					</th>
					<th
						onClick={() =>
							this.raiseSort("Total authors within field")
						}
						className="clickable table_heading heading_10"
					>
						Total Authors within field
					</th>
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
