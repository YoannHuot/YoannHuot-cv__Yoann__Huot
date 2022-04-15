import React from "react";
import classe from "./DevInfos.module.css";

const DevInfos = () => {
	return (
		<div className={classe.devInfos}>
			<h2>Un junior certes, mais un junior fort </h2>
			<h3>Formation openclassrooms </h3>
			<ul>
				<li>
					<span>Front-end : </span> Html5, CSS, Less, Saas,
					Javascript, ReactJs, Redux, Node, Git, Github,
				</li>
				<li>
					<span>Back-end </span>
					Node, express, SQL, MongoDb, Sequelize
				</li>
			</ul>
			<h3>Formation studi </h3>
			<ul>
				<li>
					<span>Front-End </span> Wordpress
				</li>
				<li>
					<span>Back-end</span>
					PHP, Symfony, Doctrine, Twig, Reactnative, Wordpress
				</li>
			</ul>
		</div>
	);
};

export default DevInfos;
