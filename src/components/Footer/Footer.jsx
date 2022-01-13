import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import Github from "../../assets/Social Media Profile Icons/GitHub_Logo.png";
import HackerRank from "../../assets/Social Media Profile Icons/hackerrank.png";
import LinkedIn from "../../assets/Social Media Profile Icons/linkedin.png";
import Medium from "../../assets/Social Media Profile Icons/medium.svg";

import css from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={css.wrapper}>
			<Logo className={css.logo} />
			<div className={css.row}>
				<a
					href="https://github.com/Mitrajeet-Golsangi"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Github} alt="github" />
				</a>
				<a
					href="https://www.hackerrank.com/mitrajeetgolsan1"
					target="_blank"
					rel="noreferrer"
				>
					<img src={HackerRank} alt="hackerrank" />
				</a>
				<a
					href="https://www.linkedin.com/in/mitrajeet-golsangi-b939611ab/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={LinkedIn} alt="Linkedin" />
				</a>
				<a  href="https://instagram.com/mitrajeet_golsangi/" target="_blank" rel="noreferrer">
                    <img src="https://i.ibb.co/PCxqXKt/instagram.png" alt="instagram" />
                </a>
				<a
					href="https://medium.com/@mitrajeetgolsangi/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Medium} alt="medium" />
				</a>
			</div>
			<div className={css.copyrightRow}>
				<p>Made by yours truly &copy; 2022</p>
			</div>
		</div>
	);
};

export default Footer;
