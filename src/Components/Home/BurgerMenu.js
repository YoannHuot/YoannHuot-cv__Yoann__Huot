import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { GiShoppingCart, GiCandlestickPhone, GiNotebook } from "react-icons/gi";
import classe from "./BurgerMenu.module.css";
import { useNavigate } from "react-router-dom";

const BurgerMenu = (props) => {
    const navigate = useNavigate();

    const goToBasket = () => {
        navigate(`${"/panier"}`);
    };

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };
    return (
        <div className={classe.container__burger__menu}>
            {!showMenu && <IoIosMenu fontSize="2em" onClick={handleMenu} />}
            {showMenu && (
                <div className={classe.burger__menu}>
                    <IoIosClose
                        fontSize="1.5em"
                        onClick={handleMenu}
                        className={classe.close__menu}
                    />
                    <div className={classe.burger__menu__content}>
                        <div className={classe.menu__card} onClick={goToBasket}>
                            <GiShoppingCart />
                            <p>Panier : {props.panier}</p>
                        </div>
                        <div className={classe.menu__card}>
                            <GiCandlestickPhone />
                            <p>Contact</p>
                        </div>
                        <div className={classe.menu__card}>
                            <GiNotebook />
                            <p>L'équipe</p>
                        </div>
                    </div>
                </div>
            )}
            {!showMenu && <div></div>}
        </div>
    );
};

export default BurgerMenu;
