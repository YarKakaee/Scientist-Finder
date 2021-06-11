import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import "./scientistsTable.css";

class ScientistsTable extends Component {
	columns = [
		{
			path: "Author Name",
			label: "Name",
		},
		{
			path: "Institute Name",
			label: "Institute",
		},
		{
			path: "Country",
			label: "Country",
		},
		{
			path: "Number of Papers",
			label: "Papers",
		},
		{
			path: "firstyr",
			label: "First Yr.",
		},
		{
			path: "lastyr",
			label: "Last Yr.",
		},
		{
			path: "c score",
			label: "C Score",
		},
		{
			path: "Subject Field",
			label: "Subject Field",
		},
		{
			path: "Rank within field",
			label: "Rank Within Field",
		},
		{
			path: "Total authors within field",
			label: "Total Authors within field",
		},
	];

	render() {
		const { scientists, sortColumn, onSort } = this.props;

		return (
			<table className="table table-hover table-striped">
				<TableHeader
					columns={this.columns}
					sortColumn={sortColumn}
					onSort={onSort}
				/>
				<TableBody columns={this.columns} data={scientists} />
			</table>
		);
	}
}

export default ScientistsTable;
