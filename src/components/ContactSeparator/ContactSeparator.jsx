import React from "react";
import { Link } from "react-scroll";
import Separator from "../../assets/Subtraction 1.svg";
import SeparatorMobile from "../../assets/Subtraction 3.svg";

import css from "../IntroSeparator/IntroSeparator.module.css";

const ContactSeparator = () => {
	return (
		<div className={css.wrapper}>
			<img src={Separator} alt="" className={css.separator} />
			<img src={SeparatorMobile} alt="" className={css.separatorMobile} />
			<div className={css.textWrapper}>
				<h4 className={css.heading}>Excited to talk with me yet ?</h4>
				<Link
					smooth={true}
					duration={800}
					offset={-60}
					to="contact"
					className="button"
				>
					Email Me
				</Link>
			</div>
		</div>
	);
};

export default ContactSeparator;
