import React from "react";
import classe from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    };
    const goToNaming = () => {
        navigate("/product/1");
    };
    const goToCdp = () => {
        navigate("/product/2");
    };
    const goToDev = () => {
        navigate("/product/3");
    };

    const handleBaseline = useMediaQuery({
        query: "(min-width: 615px)"
    });

    return (
        <footer className={classe.home__footer}>
            <div className={classe.container__title}>
                <img src={logo} alt="logo"></img>
                <h2>Yoann Huot </h2>
                {handleBaseline ? (
                    <h3>
                        Aka Epitumia, enchanteur dans les jeux comme dans la
                        vie.
                    </h3>
                ) : (
                    <h3>Salut à tous</h3>
                )}
            </div>
            <div className={classe.container__explore}>
                <h2>Explore</h2>
                <ul>
                    <li onClick={goToAbout} style={{ cursor: "pointer" }}>
                        About
                    </li>
                    <li onClick={goToNaming} style={{ cursor: "pointer" }}>
                        Naming
                    </li>
                    <li onClick={goToCdp} style={{ cursor: "pointer" }}>
                        Chef de projet
                    </li>
                    <li onClick={goToDev} style={{ cursor: "pointer" }}>
                        Développeur Web
                    </li>
                </ul>
            </div>
            <div className={classe.container__adress}>
                <h2>Visitez nous</h2>
                <ul>
                    <li>Lyon 69006</li>
                    <li>67 rue Bellecombe</li>
                    <li>France</li>
                </ul>
            </div>
            <div className={classe.container__contact}>
                <h2>New Business</h2>
                <ul>
                    <li>Yoann.huot@gmail.com</li>
                    <li>06.13.63.97.57</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
