import React from "react";
import classe from "./Banner.module.css";
import bigMe from "../../assets/moi-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	const goToContact = () => {
		navigate("/contact");
	};
	return (
		<>
			<div className={classe.area}>
				<img src={bigMe}></img>
				<ul className={classe.circles}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div className={classe.content}>
					<h2>Portfolio e-commerce de Yoann Huot</h2>
					<p>Naming, Gestion de Projet, Développement Web</p>
					<button onClick={goToContact}>Me contacter</button>
				</div>
			</div>
		</>
	);
};

export default Banner;
