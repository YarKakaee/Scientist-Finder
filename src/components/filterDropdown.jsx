import React from "react";
import "./filterDropdown.css";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { getCountries } from "./ScientistDataFunctions";
import "semantic-ui-css/semantic.css";

function FilterDropdown() {
	const oldCountries = getCountries();
	const countries = _.map(oldCountries, (country) => ({
		key: country,
		text: country,
		value: country,
	}));
	return (
		<Dropdown
			className="dropdown-filter"
			placeholder="Filter"
			search
			selection
			options={countries}
		/>
	);
}

export default FilterDropdown;
