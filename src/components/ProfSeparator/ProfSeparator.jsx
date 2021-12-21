import React from "react";
import { ReactComponent as Circle } from "../../assets/Ellipse 13.svg";

import css from "./ProfSeparator.module.css";

const ProfSeparator = () => {
	return (
		<div className={css.wrapper}>
			<Circle className={css.background} />
			<div className={css.textWrapper}>
				<p className={css.heading1}>Time to be</p>
				<p className={css.heading2}>Profetional</p>
				<p className={css.heading3}>Professional</p>
			</div>
			<div className={css.textWrapperMobile}>
				<p className={css.heading1}>Time to be</p>
				<p className={css.heading2}>Profetional</p>
				<p className={css.heading3}>Professional</p>
			</div>
		</div>
	);
};

export default ProfSeparator;
