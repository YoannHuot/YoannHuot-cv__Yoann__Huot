import React from "react";
import classe from "./Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.css";

import namer from "../../assets/Product/Couverture.png";
import dev from "../../assets/Product/01ChapeauLunettes.png";
import cdp from "../../assets/Product/02Chapeau.png";

import Article from "./Article";
// import ArticleBottom from "./ArticleBottom";

import Banner from "./Banner";

const HomeContent = () => {
	return (
		<>
			<Banner />

			<h2 className={classe.slogan}>
				Un narcissique, trois métiers, différents styles
			</h2>
			<h3 className={classe.section__title}>Nos classiques</h3>
			<div className={classe.home__article}>
				<Article
					img={namer}
					title={"Naming"}
					description={"Création de nom pour entreprise - CDNMPE22"}
					information={
						"Un service de conseil et de création admettant une méthodologie soignée."
					}
					price={"1000€ HT"}
					id={"1"}
				/>
				<Article
					img={cdp}
					title={"Project Manager"}
					description={"Gestion de projet Branding - GDPB21"}
					information={
						"Notre produit historique ! Il comprend du consulting sur l'univers de marque"
					}
					price={"Sur devis"}
					id={"2"}
				/>
				<Article
					img={dev}
					className={classe.home__section__right}
					title={"Developpeur Web"}
					subtitle={"Developpeur Web"}
					description={"Développeur Web CRUD - DWCR21"}
					information={
						"Nouvel arrivant, ce produit est le dernier de notre catalogue. "
					}
					price={"Sur devis"}
					id={"3"}
				/>
			</div>
			{/* <h3 className={classe.section__title}>Nos Partenaires</h3> */}
			{/* <div className={classes.home__article__bottom}>
                {handleCard && (
                    <section className={classes.home__article__bottom__left}>
                        {
                            <article>
                                <img src={alexis}></img>
                                <p
                                    className={
                                        classes.article__best__seller__alexis
                                    }>
                                    BEST SELLER
                                </p>
                                <title>Testeur QA</title>
                                <footer
                                    className={
                                        classes.home__article__bottom__left__footer
                                    }>
                                    <p
                                        className={
                                            classes.home__article__bottom__description
                                        }>
                                        Testeur QA Boss - TQAB21
                                    </p>
                                    <p>Sur devis</p>
                                    <RatingStar />
                                    <div
                                        className={
                                            classes.article__bottom__footer__button
                                        }>
                                        <button>Show more</button>
                                        <button>Add to Card</button>
                                    </div>
                                </footer>
                            </article>
                        }
                    </section>
                )}
                <section className={classes.home__article__bottom__right}>
                    <ArticleBottom
                        img={gael}
                        title={"Developpeur Senior"}
                        description={"Développeur Full Stack Senior - DFSS21"}
                        price={"Sur devis"}
                        id={"devsenior"}
                    />
                    <ArticleBottom
                        img={nudie}
                        title={"Infographiste"}
                        description={"Infographiste Full Stack - IFS21"}
                        price={"Sur devis"}
                        id={"infographiste"}
                    />
                    {!handleCard && (
                        <ArticleBottom
                            img={alexis}
                            title={"Testeur QA"}
                            description={"	Testeur QA Boss - TQAB21"}
                            price={"Sur devis"}
                            id={"testeur"}
                        />
                    )}
                </section>
            </div> */}
		</>
	);
};

export default HomeContent;
