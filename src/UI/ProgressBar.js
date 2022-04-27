import React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";

const ProgressBar = (props) => {
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		if (props.showData) {
			setTimeout(() => {
				setPercent(props.percent);
			}, 1000);
		} else if (!props.showData) {
			setTimeout(() => {
				setPercent(0);
			}, 800);
		}
	}, [props.showData, props.percent]);

	return (
		<>
			<Progress
				type="circle"
				percent={percent}
				strokeWidth={10}
				strokeColor={{
					"0%": "#108ee9",
					"100%": "#87d068"
				}}
				strokeLinecap="round"
				width={50}
				showInfo={false}
			/>
		</>
	);
};

export default ProgressBar;
