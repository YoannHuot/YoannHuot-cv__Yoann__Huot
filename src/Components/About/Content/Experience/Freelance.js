import React from "react";
import ReactCardFlip from "react-card-flip";
import classe from "./Experience.module.css";
import illuFreelance from "../../../../assets/illufreelance.png";
import ProgressBar from "../../../../UI/ProgressBar";
import { useMediaQuery } from "react-responsive";
const Freelance = (props) => {
	// console.log(props);

	const handleBackground = useMediaQuery({
		query: "(max-width: 1820px)"
	});
	return (
		<>
			<ReactCardFlip
				containerStyle={handleBackground && { margin: "20px", width: "567px" }}
				containerClassName={classe.card}
				isFlipped={props.isFlipped}
				flipDirection="horizontal"
				flipSpeedBackToFront="2"
				flipSpeedFrontToBack="1.5"
			>
				<div className={classe.card__front} onClick={props.handleFlip}>
					<div className={classe.card__front__content}>
						<img src={illuFreelance} alt="illustration freelance"></img>
						<div className={classe.card__front__title}>Freelance</div>
						<div className={classe.card__front__line}></div>
						<div className={classe.card__front__date}>2020 - 2021</div>
					</div>
					<div className={classe.card__front__footer}>
						<div className={classe.card__front__footer__background}></div>
						<div className={classe.card__front__footer__picto}></div>
					</div>
				</div>
				<div className={classe.card__back} onClick={props.handleFlip}>
					<div className={classe.card__back__content}>
						<div className={classe.card__back__title}>MISSIONS</div>
						<div className={classe.card__back__line}></div>
						<div className={classe.card__back__content__body}>
							<div className={classe.card__back_content__missions}>
								Élaboration d’une stratégie sur la base du besoin client
							</div>
							<div className={classe.card__back__content__missions}>
								Conception et rédaction : nom de marque, contenu SEO
							</div>
							<div className={classe.card__back__content__missions}>
								Mise en relation entre clients et prestataires graphistes réseau
							</div>

							<div className={classe.card__back__content__missions}>
								Accompagnement & conseils stratégiques
							</div>
							<div className={classe.card__back__content__missions}>
								Gestion de projet, suivi des plannings
							</div>
							<div className={classe.card__back__line__2}></div>
							<div className={classe.card__back__progress__container}>
								<div className={classe.card__back__progress}>
									<p>Créativité</p>
									<ProgressBar percent={80} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									<p>Autonomie</p>
									<ProgressBar percent={90} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									<p>Gestion</p>
									<ProgressBar percent={70} showData={props.showData} />
								</div>
							</div>
						</div>
					</div>
					<div className={classe.card__back__footer}></div>
				</div>
			</ReactCardFlip>
		</>
	);
};

export default Freelance;
