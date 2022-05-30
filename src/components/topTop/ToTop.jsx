import React from "react";
import css from "./ToTop.module.css";

import { HiOutlineArrowSmUp } from "react-icons/hi";

const ToTop = () => {
	const [visible, setVisible] = React.useState(false);

	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop;
		scrolled > 300 ? setVisible(true) : setVisible(false);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const moveToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			className={css.wrapperBtn}
			onClick={moveToTop}
			style={{
				opacity: visible ? 1 : 0,
				cursor: visible ? "pointer" : "default",
			}}
			disabled={!visible}
		>
			<HiOutlineArrowSmUp size={15} />
		</button>
	);
};

export default ToTop;
