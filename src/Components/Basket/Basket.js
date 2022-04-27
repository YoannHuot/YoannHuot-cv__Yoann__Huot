import React, { useEffect, useState } from "react";
import classe from "./Basket.module.css";
import Footer from "../Home/Footer";
import BasketContactHeader from "../../UI/BasketContactHeader";
import { useNavigate } from "react-router-dom";
import {
    IoIosAddCircleOutline,
    IoIosRemoveCircleOutline,
    IoIosCloseCircleOutline
} from "react-icons/io";
import { FaSadTear } from "react-icons/fa";

import useIncrementProducts from "../../Store/Basket/hooks";

const Basket = () => {
    const increment = useIncrementProducts();
    const productInStore = increment.productStore.product;

    const [products, setProducts] = useState(productInStore);
    const [totalPrice, setTotalPrice] = useState("");
    const [isNaming, setisNaming] = useState("");
    const [namingDelivery, setNamingDelivery] = useState("");
    const [basketCount, setBasketCount] = useState();

    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    };

    const incrementProducts = (item) => {
        increment.incrementProducts(item);
    };
    const decrementProducts = (item) => {
        increment.dicrementProducts(item);
    };

    const deleteProducts = (item) => {
        increment.deleteProducts(item);
    };

    useEffect(() => {
        if (productInStore.length === 0) {
            setBasketCount(0);
        } else if (productInStore.length > 0) {
            const mapStore = productInStore.map((items) => {
                return items.number;
            });
            const sum = mapStore.reduce((x, y) => x + y);
            setBasketCount(sum);
        }
        setProducts(productInStore);
    }, [increment, productInStore]);

    useEffect(() => {
        const mapStorageFoundNaming = productInStore.map((item) => item.id);
        const filterFoundNaming = mapStorageFoundNaming.filter(
            (param) => param !== "1"
        );

        if (filterFoundNaming.length !== 0) {
            setTotalPrice(
                "Rendez-vous sur la page contact pour établir un devis"
            );

            setisNaming(false);
        } else if (filterFoundNaming.length === 0) {
            setTotalPrice("Dépendant du brief");
            setNamingDelivery("Dépendant du brief");
            if (!productInStore[1] && !productInStore[2] && productInStore[0]) {
                const number = productInStore[0].number;
                const totalPriceNaming = "1000" * number;
                setTotalPrice(totalPriceNaming + " €");
                setisNaming(true);
                const namingTiming = number * 20;
                setNamingDelivery(namingTiming + " j");
            }
        }
    }, [increment, productInStore]);

    return (
        <div className={classe.basket}>
            <BasketContactHeader />
            <div className={classe.basket__content}>
                <section className={classe.section__product}>
                    {basketCount !== 0 ? (
                        products.map((items) => (
                            <div className={classe.product__card}>
                                <img alt = "product"
                                    src={items.img}
                                    className={classe.product__img}></img>
                                <div className={classe.product__content}>
                                    <div className={classe.product__trash}>
                                        <IoIosCloseCircleOutline
                                            onClick={() =>
                                                deleteProducts(items)
                                            }
                                        />
                                    </div>
                                    <h3>{items.title}</h3>
                                    <p>{items.description}</p>
                                    <p>{items.price}</p>
                                    <div className={classe.product__number}>
                                        <p className={classe.product__counter}>
                                            Qté : {items.number}
                                        </p>
                                        <div className={classe.product__pictos}>
                                            <IoIosAddCircleOutline
                                                onClick={() =>
                                                    incrementProducts(items)
                                                }
                                            />
                                            <IoIosRemoveCircleOutline
                                                onClick={() =>
                                                    decrementProducts(items)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={classe.empty__basket}>
                            <p>
                                Votre panier est vide{" "}
                                <FaSadTear style={{ fontSize: "1.2em" }} />
                            </p>
                        </div>
                    )}
                </section>
                <section className={classe.section__total}>
                    <div>
                        Sous-total :{" "}
                        {isNaming ? totalPrice : "Dépendant du brief"}
                    </div>
                    <div>
                        Livraison estimée :{" "}
                        {isNaming ? namingDelivery : "Dépendant du brief"}
                    </div>
                    <div className={classe.line}></div>
                    <div>Total : {totalPrice}</div>
                    <button
                        onClick={goToContact}
                        className={classe.basket__button}>
                        Finaliser ma commande ({basketCount})
                    </button>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Basket;
