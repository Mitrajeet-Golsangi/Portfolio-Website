import React from "react";
import { Element } from "react-scroll/modules";
import { ReactComponent as ContactImg } from "../../assets/contact.svg";

import emailjs from "emailjs-com";

import css from "./Contact.module.css";

const PopUp = ({ id, success }) => {
	return (
		<div
			id={id}
			className={css.popup}
			style={{
				backgroundColor: success ? "lightGreen" : "pink",
			}}
		>
			{success ? "Email Sent !" : "Something went wrong !"}
		</div>
	);
};

const Contact = () => {
	const [success, setSuccess] = React.useState(true);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"gmail_service",
				"template_c74s6mc",
				e.target,
				"user_NwqAq8iHkXEjTfp0hW5b3"
			)
			.then(
				(res) => setSuccess(true),
				(err) => setSuccess(false)
			);
		document.getElementById("emailPopup").style.opacity = 1;
		setTimeout(() => {
			document.getElementById("emailPopup").style.opacity = 0;
		}, 1000);
		e.target.reset();
	};

	return (
		<Element id="contact">
			<div className={css.wrapper}>
				<ContactImg style={{ width: "60%", alignSelf: "center" }} />
				<PopUp id="emailPopup" success={success} />
				<form className={css.form} onSubmit={sendEmail} id="contactForm">
					<input
						type="email"
						placeholder="Email"
						name="from_email"
						required
					/>
					<input
						id="subject"
						type="text"
						placeholder="Subject"
						name="subject"
						required
					/>
					<textarea
						id="body"
						placeholder="Description"
						rows={10}
						name="message"
						required
					></textarea>
					<button className={css.button} type="submit">
						Submit
					</button>
				</form>
			</div>
		</Element>
	);
};

export default Contact;
