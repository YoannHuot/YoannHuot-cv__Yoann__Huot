import React from "react";
import classe from "./Banner.module.css";
import test from "../../assets/moi-removebg-preview.png";

const Banner = () => {
    return (
        <>
            <div className={classe.area}>
                <img src={test}></img>
                <ul className={classe.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className={classe.content}>
                    <h2>Portfolio e-commerce de Yoann Huot</h2>
                    <p>Naming, Gestion de Projet, Développement Web</p>
                    <button>Me contacter</button>
                </div>
            </div>
        </>
    );
};

export default Banner;
