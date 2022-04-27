import React from "react";
import naming0 from "../../../../assets/naming0.png";
import naming1 from "../../../../assets/naming1.PNG";
import naming2 from "../../../../assets/naming2.png";
import naming3 from "../../../../assets/naming3.png";
import naming4 from "../../../../assets/naming4.png";
import classe from "./NamingReal.module.css";

const NamingReal = () => {
	return (
		<div className={classe.namingReal}>
			<h2>QUELQUES REALISATIONS</h2>
			<div className={classe.listingNaming}>
				<div className={classe.color}>
					<p>
						Entreprise de radiologie avec une forte dimension
						Humaine
					</p>
				</div>
				<img src={naming0} alt="exemple Naming 1"></img>
				<div className={classe.color}>
					<p>
						Entreprise spécialisé dans l'emailing marketing et la
						génération de leads
					</p>
				</div>
				<img src={naming2}alt="exemple Naming 2"></img>
				<div className={classe.color}>
					<p>
						Agence immobilière d'un nouveau genre, sociale,
						solidaire et humaniste
					</p>
				</div>
				<img src={naming4}alt="exemple Naming 3"></img>
				<div className={classe.color}>
					<p>
						Lancement d'une marque en propre pour une entreprise
						historique du mobilier, anciennement marque blanche
					</p>
				</div>
				<img src={naming1}alt="exemple Naming 4"></img>

				<div className={classe.color}>
					<p>
						Nom pour une application/plateforme visant à regrouper
						les commerçants, individus, lieux de vie d'une localité
					</p>
				</div>
				<img src={naming3} alt="exemple Naming 5"></img>
			</div>
		</div>
	);
};

export default NamingReal;
