import React from "react";
import { Link } from "react-scroll";

import css from "./ToTop.module.css";
const ToTop = () => {
	return (
		<div className={css.wrapperBtn}>
			<Link smooth={true} duration={800} to="top">
				^
			</Link>
		</div>
	);
};

export default ToTop;
