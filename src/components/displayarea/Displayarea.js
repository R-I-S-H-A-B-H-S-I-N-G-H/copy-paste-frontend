import React from "react";
import "./Displayarea.css";
function Displayarea({ data }) {
	var copydata = data;
	if (copydata === undefined || copydata === null || copydata.length === 0)
		copydata = "";
	else {
		copydata = copydata[0];
		console.log(copydata);
	}

	return <div className="displayarea-wrapper">{copydata.data}</div>;
}

export default Displayarea;
