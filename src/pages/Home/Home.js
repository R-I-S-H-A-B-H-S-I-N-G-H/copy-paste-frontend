import React, { useEffect, useState } from "react";
import Displayarea from "../../components/displayarea/Displayarea";
import Share from "../../components/share/Share";
import "./Home.css";
import API from "../../variables/apiEndPoint";
function Home(props) {
	var [copydata, setcopydata] = useState([]);
	async function getCopyData(size = 1) {
		const raw = await fetch(API + `/${size}`);
		var res = await raw.json();
		if (res == null) return [];
		res = res.result;
		if (res == null) return [];
		// res = res.map((ele) => ele.data);
		// console.log(res);
		return res;
	}

	// function timeoutfunction(time = 5000) {
	// 	setTimeout(
	// 		getCopyData(10).then((res) => {
	// 			console.log(res);
	// 			setcopydata(res);
	// 		}),
	// 		time,
	// 	);
	// }

	useEffect(() => {
		let interval;
		try {
			interval = setInterval(() => {
				getCopyData(10).then((res) => {
					// console.log(res);
					setcopydata(res);
				});
			}, 600);
		} catch (error) {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		getCopyData(10).then((res) => {
			setcopydata(res);
		});
	}, []);
	return (
		<div className="home-wrapper">
			<Displayarea data={copydata} />
			<Share />
		</div>
	);
}

export default Home;
