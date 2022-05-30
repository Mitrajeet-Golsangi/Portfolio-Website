import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import { IoMdArrowBack } from "react-icons/io";

import css from "../TopBar/TopBar.module.css";

const TopBar = () => {
	return (
		<nav className={css.topbar}>
			<ul className={css.topBarList}>
				<li>
					<IoMdArrowBack
						size={40}
						style={{ color: "var(--primary)" }}
						onClick={() => window.history.back()}
					/>
				</li>
			</ul>
			<Logo className={css.logo} />
		</nav>
	);
};

export default TopBar;
