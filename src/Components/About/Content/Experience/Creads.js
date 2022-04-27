import React from "react";
import ReactCardFlip from "react-card-flip";
import classe from "./Experience.module.css";
import creads from "../../../../assets/creads.png";
import ProgressBar from "../../../../UI/ProgressBar";
import { useMediaQuery } from "react-responsive";

const Creads = (props) => {
	const handleBackground = useMediaQuery({
		query: "(max-width: 1820px)"
	});

	const handleContent = useMediaQuery({
		query: "(min-width: 375px)"
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
						<img src={creads} alt="logo creads"></img>
						<div className={classe.card__front__title}>Creads </div>
						<div className={classe.card__front__line}></div>
						<div className={classe.card__front__date}>2017 - 2020</div>
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
								Élaboration des projets sur la base d’un briefng client
							</div>
							<div className={classe.card__back__content__missions}>
								Négociation budget prestataires créatifs
							</div>
							<div className={classe.card__back__content__missions}>
								Apport conseils et méthodologies pour participation aux appels
								d’offres
							</div>

							<div className={classe.card__back__content__missions}>
								Accompagnement personnalisé et conseils stratégiques et artistiques
							</div>
							<div className={classe.card__back__content__missions}>
								Gestion de projet, suivi des plannings
							</div>
							<div className={classe.card__back__line__2}></div>
							<div className={classe.card__back__progress__container}>
								<div className={classe.card__back__progress}>
									{handleContent ? <p>Négociation</p> : <p>Négo</p>}
									<ProgressBar percent={80} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									{handleContent ? <p>R.Client</p> : <p>R.Clt</p>}
									<ProgressBar percent={90} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									{handleContent ? <p>Management</p> : <p>Mgmt</p>}
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

export default Creads;
