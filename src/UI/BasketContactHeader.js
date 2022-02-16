import React, { useEffect, useState } from "react";
import classe from "./BasketContactHeader.module.css";
import logo from "../assets/logo.png";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useIncrement from "../Store/Basket/hooks";

const BasketContactHeader = () => {
    const increment = useIncrement();

    const incrementStore = increment.productStore.product;

    const [basketCount, setBasketCount] = useState(0);
    const [isBasket, setIsBasket] = useState();
    const navigate = useNavigate();
    const returnToHome = () => {
        navigate("/");
    };

    const goToContact = () => {
        navigate("/contact");
    };
    const goToBasket = () => {
        navigate("/panier");
    };

    useEffect(() => {
        if (window.location.pathname === "/panier") {
            setIsBasket(true);
        } else if (window.location.pathname === "/contact") {
            setIsBasket(false);
        }
    });

    useEffect(() => {
        if (incrementStore.length === 0) {
            setBasketCount(0);
        } else if (incrementStore.length > 0) {
            const mapStore = incrementStore.map((items) => {
                return items.number;
            });
            const sum = mapStore.reduce((x, y) => x + y);
            setBasketCount(sum);
        }
    }, [increment]);
    return (
        <>
            <div className={classe.basket__header}>
                <div className={classe.arrow}>
                    <IoArrowBack fontSize={"2em"} onClick={returnToHome} />
                </div>
                <img
                    src={logo}
                    className={classe.logo}
                    onClick={returnToHome}></img>
            </div>
            <div className={classe.basketContact}>
                <p onClick={returnToHome} className={classe.ariane__unactive}>
                    Home
                </p>
                <div className={classe.line}></div>
                <p
                    className={
                        isBasket
                            ? classe.ariane__active
                            : classe.ariane__unactive
                    }
                    onClick={goToBasket}>
                    Panier ({basketCount})
                </p>
                <div className={classe.line}></div>
                <p
                    onClick={goToContact}
                    className={
                        isBasket
                            ? classe.ariane__unactive
                            : classe.ariane__active
                    }>
                    Contact
                </p>
            </div>
        </>
    );
};

export default BasketContactHeader;
