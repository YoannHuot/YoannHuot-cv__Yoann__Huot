import React from "react";
import classe from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const backToHome = () => {
		navigate("/");
	};
	const goToContact = () => {
		navigate("/contact");
	};
	return (
		<header>
			<div className={classe.header__name} onClick={backToHome}>
				<div className={classe.header__picto}></div>
				<div className={classe.header__content}>
					<p className={classe.header__content__name}>
						Yoann Huot /{" "}
					</p>
					<p className={classe.header__content__job}>
						DEVELOPPEUR WEB
					</p>
				</div>
			</div>
			<div className={classe.header__link}>
				<p onClick={backToHome}>Home</p>
				<p onClick={goToContact}>Contact</p>
			</div>
		</header>
	);
};

export default Header;
