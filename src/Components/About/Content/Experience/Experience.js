import React, { useState, useEffect } from "react";
import classe from "./Experience.module.css";
import Creads from "./Creads";
import Moovaway from "./Moovaway";
import Canal from "./Canal";
import Freelance from "./Freelance";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "../../../../assets/skills.jpg";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
	useEffect(() => {
		AOS.init({ duration: 2500, once: true });
	}, []);

	const handleBackground = useMediaQuery({
		query: "(min-width: 1821px)"
	});

	const [isFlipped, setIsFlipped] = useState({
		creads: false,
		freelance: false,
		canal: false,
		moovaway: false
	});

	const [showData, setShowData] = useState({
		freelance: false,
		creads: false,
		moovaway: false,
		canal: false
	});

	const handleFlipFreelance = () => {
		setIsFlipped({ freelance: !isFlipped.freelance });
		setShowData({ freelance: !showData.freelance });
	};
	const handleFlipCreads = () => {
		setIsFlipped({ creads: !isFlipped.creads });
		setShowData({ creads: !showData.creads });
	};
	const handleFlipMoovaway = () => {
		setIsFlipped({ moovaway: !isFlipped.moovaway });
		setShowData({ moovaway: !showData.moovaway });
	};
	const handleFlipCanal = () => {
		setIsFlipped({ canal: !isFlipped.canal });
		setShowData({ canal: !showData.canal });
	};

	return (
		<div className={classe.experience} data-aos="fade-up">
			<div className={classe.experience__header}>
				<img src={skills} className={classe.skills} alt="skills"/>
				<h2>Mes expériences</h2>
			</div>

			<div className={classe.experience__card}>
				{handleBackground ? <div className={classe.experience__background}> </div> : <></>}

				<Freelance
					handleFlip={handleFlipFreelance}
					isFlipped={isFlipped.freelance}
					showData={showData.freelance}
				/>
				<Creads
					handleFlip={handleFlipCreads}
					isFlipped={isFlipped.creads}
					showData={showData.creads}
				/>
				<Moovaway
					handleFlip={handleFlipMoovaway}
					isFlipped={isFlipped.moovaway}
					showData={showData.moovaway}
				/>
				<Canal
					handleFlip={handleFlipCanal}
					isFlipped={isFlipped.canal}
					showData={showData.canal}
				/>
			</div>
		</div>
	);
};

export default Experience;
