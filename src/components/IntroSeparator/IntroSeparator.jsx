import React from "react";
import { ReactComponent as Separator } from "../../assets/Subtraction 1.svg";
import { ReactComponent as SeparatorMobile } from "../../assets/Subtraction 3.svg";
import css from "./IntroSeparator.module.css";

import { Element } from "react-scroll";

const IntroSeparator = () => {
	return (
		<Element id="about">
			<div className={css.wrapper}>
				<Separator className={css.separator} />
				<SeparatorMobile className={css.separatorMobile} />
				<div className={css.textWrapper}>
					<h4 className={css.heading}>Hey There !</h4>
					<p className={css.body}>
						I am Mitrajeet. A Budding Computer Engineer in India.
						<br /> I Love coding and have been doing it for 6 years now. The
						journey up till now has been great <br />
						and kept me excited for the one to come.
					</p>
					<p className={css.bodyMobile}>
						I am Mitrajeet. A Budding Computer Engineer in India.
						<br /> I Love coding and have been doing it for 6 years now.
						<br />
						The journey up till now has been great and kept me excited <br />
						for the one to come.
					</p>
				</div>
			</div>
		</Element>
	);
};

export default IntroSeparator;
