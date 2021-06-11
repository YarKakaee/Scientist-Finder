import React, { Component } from "react";
import _ from "lodash";
import "./tableBody.css";
 
class TableBody extends Component {
	render() {
		const { data, columns } = this.props;

		return (
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>
						{columns.map((column, i) => (
							<td key={i} className="table_values">
								{_.get(item, column.path)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
