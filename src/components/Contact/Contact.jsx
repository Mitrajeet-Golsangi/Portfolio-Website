import React from "react";
import { Element } from "react-scroll/modules";
import { ReactComponent as ContactImg } from "../../assets/contact.svg";

import css from "./Contact.module.css";

const Contact = () => {
	const sendEmail = () => {
		const subject = document.getElementById("subject").value;
		const body = document.getElementById("body").value;
		window.open(
			`mailto:mitrajeetgolsangi@gmail.com?subject=${subject}&body=${body}`
		);
	};

	return (
		<Element id="contact">
			<div className={css.wrapper}>
				<ContactImg style={{ width: "60%", alignSelf: "center" }} />
				<form className={css.form}>
					<input type="email" placeholder="User Email" />
					<input id="subject" type="text" placeholder="Subject" />
					<textarea id="body" placeholder="Description" rows={10}></textarea>
					<button className={css.button} onClick={sendEmail}>
						Submit
					</button>
				</form>
			</div>
		</Element>
	);
};

export default Contact;
