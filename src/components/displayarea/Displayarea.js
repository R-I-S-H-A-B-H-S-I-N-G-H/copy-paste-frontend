import React from "react";
import "./Displayarea.css";
import Markdown from "../markdown/Markdown";
function Displayarea({ data }) {
	var copydata = data;
	if (copydata === undefined || copydata === null || copydata.length === 0)
		copydata = "";
	else {
		copydata = copydata[0];
		// console.log(copydata);
	}

	return (
		<div className="displayarea-wrapper">
			<Markdown data={copydata.data} />
		</div>
	);
}

export default Displayarea;
