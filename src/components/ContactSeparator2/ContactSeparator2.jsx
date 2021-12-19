import React from "react";
import Separator from "../../assets/Subtraction 1.svg";
import SeparatorMobile from "../../assets/Subtraction 3.svg";

import css from "../IntroSeparator/IntroSeparator.module.css";

const ContactSeparator2 = () => {
	return (
		<div className={css.wrapper}>
			<img src={Separator} alt="" className={css.separator} />
			<img src={SeparatorMobile} alt="" className={css.separatorMobile} />
			<div className={css.textWrapper}>
				<h4 className={css.heading}>Get in Touch</h4>
				<p className={css.body}>
					That's it from my side folks. Please feel free to contact me anytime.
					<br />
					Leaving a reply would mean a lot to me.
				</p>
				<p className={css.bodyMobile}>
					That's it from my side folks. Please feel free to contact me anytime.
					<br />
					Leaving a reply would mean a lot to me.
				</p>
			</div>
		</div>
	);
};

export default ContactSeparator2;
