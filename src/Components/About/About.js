import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";


const About = () => {
	// const handleHeader = useMediaQuery({
	// 	query: "(min-width: 768px)"
	// });
	return (
		<div>
			{/* {handleHeader ? <Header /> : <></>} */}
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default About;
