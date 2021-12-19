import React from "react";
import Programming from "../../assets/programming.svg";

import css from "./Hero.module.css";

const Hero = () => {
	return (
		<div>
			<h1 className={css.heading}>
				Student, Web Developer, Software Enthusiast
			</h1>
			<p className={css.subheading}>Programming is a passion not a job</p>
			<div className={css.heroImg}>
				<img src={Programming} alt="Programming img" />
			</div>
		</div>
	);
};

export default Hero;
