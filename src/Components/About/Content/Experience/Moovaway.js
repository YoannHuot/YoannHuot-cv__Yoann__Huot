import React from "react";
import ReactCardFlip from "react-card-flip";
import classe from "./Experience.module.css";
import moovaway from "../../../../assets/moovaway.jpg";
import ProgressBar from "../../../../UI/ProgressBar";
import { useMediaQuery } from "react-responsive";

const Moovaway = (props) => {
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
						<img src={moovaway} alt="logo moovaway"></img>
						<div className={classe.card__front__title}>Movaway </div>
						<div className={classe.card__front__line}></div>
						<div className={classe.card__front__date}>2016 - 2016</div>
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
								Élaboration de la stratégie communication de l’entreprise
							</div>
							<div className={classe.card__back__content__missions}>
								Rédaction du business plan et analyse de marché
							</div>
							<div className={classe.card__back__content__missions}>
								Community management
							</div>

							<div className={classe.card__back__content__missions}>
								Création du blog de l’entreprise & rédaction de contenu
							</div>
							<div className={classe.card__back__content__missions}>
								Prospection et rendez-vous client
							</div>
							<div className={classe.card__back__line__2}></div>
							<div className={classe.card__back__progress__container}>
								<div className={classe.card__back__progress}>
									<p>Anglais</p>
									<ProgressBar percent={60} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									<p>Marketing</p>
									<ProgressBar percent={70} showData={props.showData} />
								</div>
								<div className={classe.card__back__progress}>
									<p>Rédaction</p>
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

export default Moovaway;
