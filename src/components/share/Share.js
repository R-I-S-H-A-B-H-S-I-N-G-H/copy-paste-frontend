import React, { useState } from "react";
import "./Share.css";
import API from "../../variables/apiEndPoint";
function Share(props) {
	const [inpdata, setinpdata] = useState("");
	async function postdata(data) {
		var postdata = { data: data };
		// console.log(data);
		console.log(postdata);
		const res = await fetch(API, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			mode: "cors",
			body: JSON.stringify(postdata),
		});
		var f = await res.json();
		console.log(f);
	}

	return (
		<div className="share-wrapper">
			<textarea
				value={inpdata}
				onChange={(e) => {
					// console.log(e.target.value);
					setinpdata(e.target.value);
				}}
				placeholder="Enter you message to be shared"
			></textarea>
			<button onClick={() => postdata(inpdata)} className="share-btn">
				Share
			</button>
		</div>
	);
}

export default Share;
