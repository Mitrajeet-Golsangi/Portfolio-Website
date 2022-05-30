import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import css from "./TopBar.module.css";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";

const TopBar = () => {
	return (
		<nav className={css.topbar}>
			<Logo className={css.logo} />
			<ul className={css.topBarList}>
				<li className={css.hideIfMobile}>
					<Link smooth={true} duration={800} offset={-60} to="about">
						About
					</Link>
				</li>
				<li>
					<Link smooth={true} duration={800} offset={60} to="portfolio">
						Portfolio
					</Link>
				</li>
				<li>
					<Link smooth={true} duration={800} offset={-60} to="contact">
						Contact
					</Link>
				</li>
				<li>
					<ReactLink to="/blogs">Blogs</ReactLink>
				</li>
			</ul>
		</nav>
	);
};

export default TopBar;
