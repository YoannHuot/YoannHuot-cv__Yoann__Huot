import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useIncrement from "../../Store/Basket/hooks";
import useShowProduct from "../../Store/ShowPages/hooks";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Personalisation from "./Personalisation";

import chapeauLunettes01 from "../../assets/Product/01ChapeauLunettes.png";
import chapeau01 from "../../assets/Product/01Chapeau.png";
import lunettes01 from "../../assets/Product/01Lunettes.png";
import rien01 from "../../assets/Product/01Rien.png";

import chapeauLunettes02 from "../../assets/Product/02ChapeauLunettes.png";
import chapeau02 from "../../assets/Product/02Chapeau.png";
import lunettes02 from "../../assets/Product/02Lunettes.png";
import rien02 from "../../assets/Product/02Rien.png";

import chapeauLunettes03 from "../../assets/Product/03ChapeauLunettes.png";
import chapeau03 from "../../assets/Product/03Chapeau.png";
import lunettes03 from "../../assets/Product/03Lunettes.png";
import rien03 from "../../assets/Product/03Rien.png";

import classe from "./Product.module.css";
import ModalProduct from "./Modals/ModalProduct/ModalProduct";
import ModalReal from "./Modals/ModalReal/ModalReal";
import { useMediaQuery } from "react-responsive";

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const increment = useIncrement();
    const showProduct = useShowProduct();

    const currentProduct = showProduct.navigateStore.productData;

    const contentButton = useMediaQuery({
        query: "(min-width: 513px)"
    });

    const [image, setImage] = useState(currentProduct.img);

    const [numberOfProduct, setNumberOfProduct] = useState(0);

    const [showInfosProduct, setShowInfoProduct] = useState(false);
    const [showRealProduct, setShowRealProduct] = useState(false);
    const [personalised, setPersonalised] = useState({
        chapeauLunettes01: null,
        chapeau01: null,
        lunettes01: null,
        rien01: null,
        chapeauLunettes02: null,
        chapeau02: null,
        lunettes02: null,
        rien02: null,
        chapeauLunettes03: null,
        chapeau03: null,
        lunettes03: null,
        rien03: null
    });

    const productInfos = () => {
        if (showInfosProduct) {
            setShowInfoProduct(false);
        } else if (!showInfosProduct) {
            setShowInfoProduct(true);
        }
    };

    const productReal = () => {
        if (showRealProduct) {
            setShowRealProduct(false);
        } else if (!showRealProduct) {
            setShowRealProduct(true);
        }
    };

    const navigateToContact = () => {
        navigate(`${"/panier"}`);
    };

    const addProductToBasket = () => {
        currentProduct.img = image;
        increment.incrementProducts(currentProduct);
    };

    useEffect(() => {
        const currentProductIncrement = increment.productStore;
        const selectProduct = currentProductIncrement.product.filter((item) => {
            return item.id === id;
        });

        if (selectProduct.length > 0) {
            setNumberOfProduct(selectProduct[0].number);
        }
    }, [increment]);

    useEffect(() => {
        if (personalised.rien01) {
            setImage(rien01);
        }
        if (personalised.lunettes01) {
            setImage(lunettes01);
        }
        if (personalised.chapeau01) {
            setImage(chapeau01);
        }
        if (personalised.chapeauLunettes01) {
            setImage(chapeauLunettes01);
        }
        if (personalised.rien02) {
            setImage(rien02);
        }
        if (personalised.lunettes02) {
            setImage(lunettes02);
        }
        if (personalised.chapeau02) {
            setImage(chapeau02);
        }
        if (personalised.chapeauLunettes02) {
            setImage(chapeauLunettes02);
        }
        if (personalised.rien03) {
            setImage(rien03);
        }
        if (personalised.lunettes03) {
            setImage(lunettes03);
        }
        if (personalised.chapeau03) {
            setImage(chapeau03);
        }
        if (personalised.chapeauLunettes03) {
            setImage(chapeauLunettes03);
        }
        console.log(personalised);
    }, [personalised]);

    return (
        <div className={classe.page__product}>
            <Header />
            <div className={classe.top}>
                <section className={classe.section__left}>
                    <img src={image}></img>
                </section>

                <section className={classe.section__right}>
                    <div className={classe.right__title__price}>
                        <p className={classe.right__title}>
                            Prestation de{" "}
                            {currentProduct.subtitle
                                ? currentProduct.subtitle
                                : currentProduct.title}
                        </p>
                        <p className={classe.right__price}>
                            {currentProduct.title === "Naming"
                                ? "1000€ HT"
                                : "Sur devis"}
                        </p>
                    </div>
                    <Personalisation
                        id={id}
                        setPersonalised={setPersonalised}
                    />
                    <div className={classe.right__expedition}>
                        <p className={classe.expedition}>
                            Frais d'expédition offerts
                        </p>
                    </div>
                    <div className={classe.right__cta}>
                        <button
                            className={classe.button__real}
                            onClick={productReal}>
                            {contentButton ? "MES REALISATIONS" : "CREAS"}
                        </button>
                        <button
                            className={classe.button__real}
                            onClick={productInfos}>
                            {contentButton ? " " : ""}
                            {currentProduct.subtitle
                                ? currentProduct.subtitle
                                : currentProduct.title}
                        </button>
                        <button
                            className={classe.button__add}
                            onClick={addProductToBasket}>
                            {contentButton
                                ? `${"AJOUTER AU PANIER "} ${"( "}${numberOfProduct} ${")"}`
                                : "AJOUTER"}
                        </button>
                    </div>
                    <button
                        className={classe.button__rdv}
                        onClick={navigateToContact}>
                        {contentButton ? "CONFIRMER" : "CONFIRM"}
                    </button>
                </section>
                {showInfosProduct && (
                    <ModalProduct
                        currentProduct={currentProduct}
                        productInfos={productInfos}
                    />
                )}
                {showRealProduct && (
                    <ModalReal
                        currentProduct={currentProduct}
                        productReal={productReal}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Product;
