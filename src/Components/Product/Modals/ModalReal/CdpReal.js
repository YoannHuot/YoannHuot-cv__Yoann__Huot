import React from "react";
import classe from "./CdpReal.module.css";
import logoZenride from "../../../../assets/logo-zenride.svg";
import creads from "../../../../assets/creads2.png";

const CdpReal = () => {
    return (
        <div>
            <h2>QUELQUES REALISATIONS</h2>
            <div className={classe.listingCdp}>
                <div className={classe.zenride}>
                    <img src={logoZenride}></img>
                    <ul>
                        <li>Travail sur l'identité de la marque</li>
                        <li>Rédaction d'une plateforme de marque</li>
                        <li>Rédaction d'une charte éditorialee</li>
                        <li>
                            Création d'une baseline pour exprimer les documents
                            précédents
                        </li>
                        <li>Création du logotype</li>
                        <li>Charte de logotype</li>
                        <li>
                            Déclinaison du style graphique ur une présentation
                            commerciale de 16 pages
                        </li>
                        <li>Refonte du thème wordpress</li>
                    </ul>
                </div>
                <div className={classe.creads}>
                    <img src={creads}></img>
                    <ul>
                        <li>
                            Project Manager pendant 3 ans chez Creads sur des
                            clients TPE / PME / GC
                        </li>
                        <li>
                            Urgo, Sncf, Macsf, Société Générale, Crédit
                            Agricole...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CdpReal;
