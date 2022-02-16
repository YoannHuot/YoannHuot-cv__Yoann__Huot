import React from "react";
import classes from "./NamingInfos.module.css";

const NamingInfos = () => {
	return (
		<div className={classes.namingInfos}>
			<h2>Naming</h2>
			<div className={classes.container}>
				<h3>Définition</h3>
				<div>
					Le naming peut d'abord désigner le processus de création et de choix d'un nom de
					marque pour une société, une marque ou un produit. Le naming revêt une
					importance stratégique pour l'entreprise puisque une partie importante des
					investissements marketing et publicitaires ultérieurement réalisés le seront au
					service de la marque ainsi créée.{" "}
				</div>
			</div>
			<div className={classes.line}></div>
			<div className={classes.container}>
				<h3>Typologies de noms</h3>
				<div>
					On trouve différentes typologies de noms qui s'adaptent au besoin de
					l'entreprise et à ses affinités. Parmis ces grandes typologies on retrouve des
					noms modernes, abstraits, représentatifs. Pour les composer, on travaille sur la
					sémantique des mots. On peut ainsi créer des néologismes purs ou basés sur
					l'existant. Pour des noms représentatifs on choisir plus de s'orienter vers des
					mots valises
				</div>
			</div>
			<div className={classes.line}></div>
			<div className={classes.container}>
				<h3>Ma méthode</h3>
				<div className={classes.methodologie__card}>
					<p>
						1 - Brief créatif Échange et rédaction d’un document de brief réutilisable
						contenant
					</p>
					<ul>
						<li> Identité de marque</li>
						<li>Coeur de cible</li>
						<li> Promesse </li>
						<li>Positionnement & Ambition</li>
						<li>
							Pistes créatives Livraison d’une synthèse de l’ensemble au format PDF
						</li>
						<li>Validation du brief définitif</li>
					</ul>
				</div>
				<div className={classes.methodologie__card}>
					<p>2- Naming phase 1 Création de 10 propositions avec pour chacune</p>

					<ul>
						<li> Une explication sémantique et phonétique</li>
						<li>
							Une justification cohérente vis-à-vis de l’identité de marque et du
							brief
						</li>
						<li>
							Une vérification des disponibilités Google, OMPI et OVH (à affiner
							post-projet avec un juriste)
						</li>
					</ul>
				</div>
				<div className={classes.methodologie__card}>
					<p>3- Naming phase 2</p>
					<ul>
						<li>Ajustement du brief créatif selon les retours du client</li>
						<li>Nouvelle salve de 10 propositions </li>
						<li>fin du projet </li>
					</ul>
				</div>
			</div>

			<div className={classes.line}></div>
			<div className={classes.container}>
				<h3>Prix</h3>
				<div>1000€ HT</div>
				<div>Ce prix est à mettre au conditionnel selon l'étendu des travaux</div>
			</div>
		</div>
	);
};

export default NamingInfos;
