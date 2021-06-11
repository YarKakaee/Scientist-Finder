import React from "react";
import "./searchBox.css";

const SearchBox = ({ value, onChange, placeholderText }) => {
	return (
		<input
			type="text"
			name="query"
			placeholder={placeholderText}
			className="form-control"
			value={value}
			onChange={(e) => onChange(e.currentTarget.value)}
		/>
	);
};

export default SearchBox;
