import React from "react";
import ReactCardFlip from "react-card-flip";
import classe from "./Experience.module.css";
import canal from "../../../../assets/canal.jpg";
import ProgressBar from "../../../../UI/ProgressBar";
import { useMediaQuery } from "react-responsive";

const Canal = (props) => {
  const handleBackground = useMediaQuery({
    query: "(max-width: 1820px)",
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
          <div>test</div>
          <div className={classe.card__front__content}>
            <img src={canal}></img>
            <div className={classe.card__front__title}>Canal+ </div>
            <div className={classe.card__front__line}></div>
            <div className={classe.card__front__date}>2015 - 2017</div>
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
                Prise de besoin et conseils auprès des clients interne
              </div>
              <div className={classe.card__back__content__missions}>
                Chargé du suivi exécutif de la production graphiqu
              </div>
              <div className={classe.card__back__content__missions}>
                Mise en place et suivi de la fabrication
              </div>

              <div className={classe.card__back__content__missions}>
                Gestion et pilotage budgétaire
              </div>
              <div className={classe.card__back__content__missions}>
                Consultations des préstataires industriels
              </div>
              <div className={classe.card__back__line__2}></div>
              <div className={classe.card__back__progress__container}>
                <div className={classe.card__back__progress}>
                  <p>Hiérarchie</p>
                  <ProgressBar percent={85} showData={props.showData} />
                </div>
                <div className={classe.card__back__progress}>
                  <p>Rigueur</p>
                  <ProgressBar percent={70} showData={props.showData} />
                </div>
                <div className={classe.card__back__progress}>
                  <p>Volume</p>
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

export default Canal;
