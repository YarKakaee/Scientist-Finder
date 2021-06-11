import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _, { filter } from "lodash";
import ScientistsTable from "./scientistsTable";
import TableSubHeader from "./common/tableSubHeader";
import axios from "axios";

class Scientists extends Component {
	state = {
		allScientists: {},
		currentScientists: [],
		currentPage: null,
		totalPages: null,
		filters: [],
		nameSearchQuery: "",
		instituteSearchQuery: "",
		countrySearchQuery: "",
		subjectSearchQuery: "",
		selectedFilter: null,
		sortColumn: { path: "Author Name", order: "asc" },
		totalfiltered: null,
	};

	componentDidMount() {
		axios.get(`/dataframe.json`).then((res) => {
			this.setState({
				allScientists: res.data.DataFrame,
			});
		});
	}

	handlePageChange = (data) => {
		const { currentPage, totalPages } = data;

		this.setState({ currentPage, totalPages });
	};

	handleNameSearch = (NameQuery) => {
		this.setState({
			nameSearchQuery: NameQuery,
			selectedFilter: null,
			currentPage: 1,
		});
	};

	handleInstituteSearch = (InstituteQuery) => {
		this.setState({
			instituteSearchQuery: InstituteQuery,
			selectedFilter: null,
			currentPage: 1,
		});
	};

	handleCountrySearch = (CountrySearchQuery) => {
		this.setState({
			countrySearchQuery: CountrySearchQuery,
			selectedFilter: null,
			currentPage: 1,
		});
	};

	handleSubjectSearch = (SubjectSearchQuery) => {
		this.setState({
			subjectSearchQuery: SubjectSearchQuery,
			selectedFilter: null,
			currentPage: 1,
		});
	};

	handleSort = (path) => {
		this.setState({ sortColumn: { path, order: "asc" }, currentPage: 1 });
	};

	handleFilterSelect = (filter) => {
		this.setState({
			selectedFilter: filter,
			currentPage: 1,
		});
	};

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

	getPagedData = () => {
		const {
			currentPage,
			sortColumn,
			selectedFilter,
			nameSearchQuery,
			instituteSearchQuery,
			countrySearchQuery,
			subjectSearchQuery,
			allScientists,
		} = this.state;

		let filtered = allScientists;

		if (nameSearchQuery) {
			filtered = allScientists.filter((m) =>
				String(m["Author Name"])
					.toLowerCase()
					.includes(nameSearchQuery.toLowerCase())
			);
		} else if (instituteSearchQuery) {
			filtered = allScientists.filter((m) =>
				String(m["Institute Name"])
					.toLowerCase()
					.includes(instituteSearchQuery.toLowerCase())
			);
		} else if (countrySearchQuery) {
			filtered = allScientists.filter((m) =>
				String(m["Country"])
					.toLowerCase()
					.includes(countrySearchQuery.toLowerCase())
			);
		} else if (subjectSearchQuery) {
			filtered = allScientists.filter((m) =>
				String(m["Subject Field"])
					.toLowerCase()
					.includes(subjectSearchQuery.toLowerCase())
			);
		} else if (selectedFilter) {
			filtered = allScientists.filter(
				(m) => m.filter.name === selectedFilter
			);
		}

		const sorted = _.orderBy(
			filtered,
			[sortColumn.path],
			[sortColumn.order]
		);

		const scientists = paginate(sorted, currentPage, 50);

		return { totalCount: filtered.length, data: scientists };
	};

	render() {
		const { length: count } = this.state.allScientists;
		const { sortColumn } = this.state;

		if (count === 0) return <p>There are no scientists in the database.</p>;

		const { totalCount, data: scientists } = this.getPagedData();

		return (
			<div className="row">
				<p className="table_status">
					{count > 0
						? "Showing " +
						  totalCount +
						  " scientists in the database."
						: "Loading the database..."}
				</p>
				{count > 0 ? (
					<div>
						<TableSubHeader
							nameSearchQuery={this.nameSearchQuery}
							handleNameSearch={this.handleNameSearch}
							instituteSearchQuery={this.instituteSearchQuery}
							handleInstituteSearch={this.handleInstituteSearch}
							countrySearchQuery={this.countrySearchQuery}
							handleCountrySearch={this.handleCountrySearch}
							subjectSearchQuery={this.subjectSearchQuery}
							handleSubjectSearch={this.handleSubjectSearch}
						/>
						<ScientistsTable
							scientists={scientists}
							onSort={this.handleSort}
							sortColumn={sortColumn}
						/>

						<Pagination
							totalRecords={totalCount}
							pageLimit={50}
							pageNeighbours={1}
							onPageChanged={this.handlePageChange}
							filtered={totalCount}
						/>
					</div>
				) : (
					<div style={{ height: "1000px" }}></div>
				)}
			</div>
		);
	}
}

export default Scientists;
