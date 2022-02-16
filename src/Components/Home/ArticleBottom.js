import React from "react";
import classes from "./ArticleBottom.module.css";
import RatingStar from "../../UI/RatingStar";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const ArticleBottom = (props) => {
	const navigate = useNavigate();
	const goToProduct = () => {
		navigate(`${"product/"}${props.id}`);
	};

	const handleCard = useMediaQuery({
		query: "(min-width: 1221px)"
	});

	return (
		<article className={classes.home__section__right}>
			<p className={classes.home__section__right__title}>{props.title}</p>
			<div className={classes.article__bottom__content}>
				{!handleCard && (
					<img src={props.img} className={classes.article__bottom__img}></img>
				)}
				<p className={classes.article__best__seller}>BEST SELLER</p>
				<p className={classes.home__article__bottom__description}>{props.description}</p>
				<p>{props.price}</p>
				<button>Add to Card</button>
				<button onClick={goToProduct}>Show More</button>
				<RatingStar />
			</div>
			{handleCard && <img src={props.img} className={classes.article__bottom__img}></img>}
		</article>
	);
};

export default ArticleBottom;
