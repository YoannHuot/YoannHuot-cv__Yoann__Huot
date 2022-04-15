import React from "react";
import Header from "../Home/Header";
import { useNavigate } from "react-router-dom";
import classe from "./Contact.module.css";
import BasketContactHeader from "../../UI/BasketContactHeader";
import { FiSmartphone, FiMail, FiLinkedin, FiMapPin } from "react-icons/fi";
import { RiEmotionLaughFill } from "react-icons/ri";
import Footer from "../Home/Footer";

const Contact = () => {
	const getItemStorage =
		JSON.parse(localStorage.getItem("persist:increment")) || [];
	const parseStorage = JSON.parse(getItemStorage.product);

	const navigate = useNavigate();
	const returnToHome = () => {
		navigate("/");
	};

	const goToContact = () => {
		navigate("/contact");
	};

	return (
		<>
			<BasketContactHeader />
			<div className={classe.subtitle}>
				<h2 className={classe.title}>CONTACT HUOT YOANN </h2>
				<p>
					Le servide de commande n'est pas encore disponible, merci de
					me contacter <RiEmotionLaughFill />
				</p>
			</div>

			<div className={classe.contact}>
				<div className={classe.card__contact}>
					<div className={`${classe.picto} ${classe.picto1}`}>
						<FiSmartphone
							style={{ fontSize: "2.2em", color: "white" }}
						/>
					</div>
					<p>Téléphone</p>
					<p>+33 6 13 63 97 57 </p>
				</div>
				<div className={classe.card__contact}>
					<div className={`${classe.picto} ${classe.picto2}`}>
						<FiMail style={{ fontSize: "2.2em", color: "white" }} />
					</div>
					<p>Email</p>
					<p>Yoann.huot@gmail.com</p>
				</div>
				<div className={classe.card__contact}>
					<div className={`${classe.picto} ${classe.picto3}`}>
						<FiMapPin
							style={{ fontSize: "2.2em", color: "white" }}
						/>
					</div>
					<p>Adresse</p>
					<p>67 rue Bellecombe, 69006 </p>
				</div>
				<div className={classe.card__contact}>
					<div className={`${classe.picto} ${classe.picto4}`}>
						<FiLinkedin
							style={{ fontSize: "2.2em", color: "white" }}
						/>
					</div>
					<p>Linkedin</p>
					<p>lien de redirection </p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
