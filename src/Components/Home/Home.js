import React from "react";
import classe from "./Home.module.css";

import Footer from "./Footer";

import Header from "./Header";
import PromotionHeader from "./PromotionHeader";

import HomeContent from "./HomeContent";

const Home = () => {
    return (
        <div className={classe.home}>
            <PromotionHeader />
            <Header />
            <HomeContent />
            <Footer />
        </div>
    );
};

export default Home;
