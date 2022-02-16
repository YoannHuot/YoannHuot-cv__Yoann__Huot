import React, { useState, useEffect } from "react";
import classe from "./Article.module.css";
import { MdShoppingBasket, MdRemoveRedEye } from "react-icons/md";
import moi from "../../assets/moi-removebg-preview.png";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// import classe from "./Home.module.css";
import { FaPlus } from "react-icons/fa";

import useIncrement from "../../Store/Basket/hooks";
import useShowProduct from "../../Store/ShowPages/hooks";

const Article = (props) => {
    const increment = useIncrement();
    const show = useShowProduct();

    const [isDev, setIsDev] = useState(false);

    const navigate = useNavigate();

    const handleButton = useMediaQuery({
        query: "(min-width: 1440px)"
    });
    const handleButtonTablet = useMediaQuery({
        query: "(min-width: 810px)"
    });

    const showProduct = (e) => {
        const productData = {
            ...props
        };
        show.showProducts({ isTrue: true, productData });
        navigate(`${"product/"}${props.id}`);
    };

    const incrementProduct = () => {
        increment.incrementProducts(props);
    };

    useEffect(() => {
        if (props.title === "NEW ARRIVAL") {
            setIsDev(true);
        }
    }, []);

    return (
        <>
            <article className={classe.card__product}>
                <div
                    className={classe.card__img__container}
                    onClick={showProduct}>
                    <img src={props.img} alt="Product"></img>
                </div>
                <div className={classe.card__content}>
                    <div className={classe.card__title} onClick={showProduct}>
                        <span className={classe.card__title__text}>
                            {props.title}
                        </span>
                    </div>
                    <div
                        className={classe.card__subtitle}
                        onClick={showProduct}>
                        <h3>{props.description}</h3>
                    </div>
                    <div
                        className={classe.card__description}
                        onClick={showProduct}>
                        <p className={classe.information}>
                            {props.information}
                        </p>
                        <p className={classe.price}>Tarif : {props.price}</p>
                    </div>
                    <div className={classe.card__footer}>
                        <div className={classe.card__footer__left}>
                            <button
                                className={classe.card__footer__button}
                                onClick={showProduct}>
                                <MdRemoveRedEye />
                            </button>
                        </div>
                        <div className={classe.card__footer__right}>
                            <button
                                className={classe.card__footer__button}
                                onClick={incrementProduct}>
                                <MdShoppingBasket />
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Article;
