import React from "react";
import classe from "./DevReal.module.css";

const DevReal = () => {
	return (
		<div className={classe.devReal}>
			<h3>Mes réalisations </h3>
			<ul>
				<li>
					<span>Ce site</span> a été développé intégralement par mes
					soins via ReactJs, Redux, et Css3.
				</li>
				<li>
					<span>Votre site ! </span> J'ai besoin de pratique pour
					consolider mes connaissances et c'est pourquoi je
					pratiquerai des prix TRES avantageux pour la réalisation de
					vos projets.
				</li>{" "}
			</ul>
		</div>
	);
};

export default DevReal;
