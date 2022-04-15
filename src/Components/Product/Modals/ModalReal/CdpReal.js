import React from "react";
import classe from "./CdpReal.module.css";
import logoZenride from "../../../../assets/logo-zenride.svg";
import creads from "../../../../assets/creads2.png";

const CdpReal = () => {
	return (
		<div className={classe.listingCdp}>
			<h2>QUELQUES REALISATIONS</h2>
			<div>
				<div className={classe.zenride}>
					<img
						src={logoZenride}
						className={classe.zenride__logo}></img>
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
					<img src={creads} className={classe.creads__logo}></img>
					<ul>
						<li>
							<span>Project Manager pendant 3 ans</span> chez
							Creads sur des clients TPE / PME / GC
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
