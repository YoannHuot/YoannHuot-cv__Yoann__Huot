import React, { useState, useEffect } from "react";
import classe from "./Personnalisation.module.css";

const Personalisation = (props) => {
	const [beardChoice, setBeardChoice] = useState(false);
	const [moustacheChoice, setMoustacheChoice] = useState(false);
	const [glassesChoice, setGlassesChoice] = useState(false);
	const [hatChoice, setHatChoice] = useState(false);

	const changeBeard = () => {
		if (beardChoice) {
			setBeardChoice(false);
		} else if (!beardChoice) {
			setBeardChoice(true);
		}
	};
	const changeGlasses = () => {
		if (glassesChoice) {
			setGlassesChoice(false);
		} else if (!glassesChoice) {
			setGlassesChoice(true);
		}
	};
	const changeHat = () => {
		if (hatChoice) {
			setHatChoice(false);
		} else if (!hatChoice) {
			setHatChoice(true);
		}
	};
	const changeMoustache = () => {
		if (moustacheChoice) {
			setMoustacheChoice(false);
		} else if (!moustacheChoice) {
			setMoustacheChoice(true);
		}
	};

	useEffect(() => {
		switch (true) {
			// 01

			case beardChoice === true &&
				glassesChoice === false &&
				hatChoice === false:
				props.setPersonalised({ rien01: true });
				break;
			case beardChoice === true &&
				glassesChoice === true &&
				hatChoice === false:
				props.setPersonalised({ lunettes01: true });
				break;
			case beardChoice === true &&
				glassesChoice === false &&
				hatChoice === true:
				props.setPersonalised({ chapeau01: true });
				break;
			case beardChoice === true &&
				glassesChoice === true &&
				hatChoice === true:
				props.setPersonalised({ chapeauLunettes01: true });
				break;

			// 02

			case moustacheChoice === true &&
				beardChoice === false &&
				glassesChoice === false &&
				hatChoice === false:
				props.setPersonalised({ rien02: true });
				break;
			case moustacheChoice === true &&
				glassesChoice === true &&
				hatChoice === false:
				props.setPersonalised({ lunettes02: true });
				break;
			case moustacheChoice === true &&
				beardChoice === false &&
				glassesChoice === false &&
				hatChoice === true:
				props.setPersonalised({ chapeau02: true });
				break;
			case moustacheChoice === true &&
				beardChoice === false &&
				glassesChoice === true &&
				hatChoice === true:
				props.setPersonalised({ chapeauLunettes02: true });
				break;
			// 03

			case beardChoice === false &&
				moustacheChoice === false &&
				glassesChoice === true &&
				hatChoice === true:
				props.setPersonalised({ chapeauLunettes03: true });

				break;
			case beardChoice === false &&
				moustacheChoice === false &&
				glassesChoice === true &&
				hatChoice === false:
				props.setPersonalised({ lunettes03: true });

				break;
			case beardChoice === false &&
				moustacheChoice === false &&
				glassesChoice === false &&
				hatChoice === true:
				props.setPersonalised({ chapeau03: true });
				break;

			case beardChoice === false &&
				moustacheChoice === false &&
				glassesChoice === false &&
				hatChoice === false:
				props.setPersonalised({ rien03: true });
				break;
			default:
				break;
		}
	}, [beardChoice, hatChoice, glassesChoice, moustacheChoice, props]);

	return (
		<div className={classe.right__personalisation}>
			{!moustacheChoice ? (
				<>
					<div className={classe.right__choice}>
						<p>Barbe</p>
						<div className={classe.choice}>
							<input
								type="checkbox"
								className={classe.toggle}
								onClick={changeBeard}></input>
						</div>
					</div>
					<div className={classe.big_line}></div>
				</>
			) : (
				""
			)}
			{!beardChoice ? (
				<>
					<div className={classe.right__choice}>
						<p>Moustache</p>
						<div className={classe.choice}>
							<input
								type="checkbox"
								className={classe.toggle}
								onClick={changeMoustache}></input>
						</div>
					</div>
					<div className={classe.big_line}></div>
				</>
			) : (
				""
			)}

			<div className={classe.right__choice}>
				<p>Lunettes</p>
				<div className={classe.choice}>
					<input
						type="checkbox"
						className={classe.toggle}
						onClick={changeGlasses}></input>
				</div>
			</div>
			<div className={classe.big_line}></div>
			<div className={classe.right__choice}>
				<p>Chapeau</p>
				<div className={classe.choice}>
					<input
						type="checkbox"
						className={classe.toggle}
						onClick={changeHat}></input>
				</div>
			</div>
		</div>
	);
};

export default Personalisation;
