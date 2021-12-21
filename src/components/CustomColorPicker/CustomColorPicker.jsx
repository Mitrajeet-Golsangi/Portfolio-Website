import React from "react";
import { SketchPicker } from "react-color";
import { ColorContext } from "./ColorContextProvider";
import data from "./data";

const style = {
	position: "fixed",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	top: "5%",
	right: "1%",
	zIndex: 100,
};

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, changeState) {
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				changeState(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, changeState]);
}

const Modal = ({ isVisible }) => {
	const { color, changeColor } = React.useContext(ColorContext);
	const handleChangeComplete = (c) => {
		changeColor(c.hex, data);
	};

	return isVisible ? (
		<div>
			<SketchPicker color={color} onChangeComplete={handleChangeComplete} />
			<button
				onClick={() => {
					changeColor("#16c389", data);
				}}
			>
				Reset
			</button>
		</div>
	) : null;
};

const CustomColorPicker = () => {
	const [visible, setVisible] = React.useState(false);
	const [buttonVisible, setButtonVisible] = React.useState(true);

	const wrapperRef = React.useRef(null);
	useOutsideAlerter(wrapperRef, setVisible);

	return (
		<div id="colorPicker" style={style} ref={wrapperRef}>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
				style={{
					fontStyle: "italic",
					fontFamily: "Lato",
					color: visible ? "red" : "var(--paragraph-color)",
					backgroundColor: "var(--background)",
					borderRadius: "10px",
					border: visible ? "1px solid red" : "1px solid var(--primary)",
					padding: "5px 15px",
					transition: "0.2s ease-in-out",
					opacity: buttonVisible || visible === true ? 1 : 0.2,
				}}
				onMouseEnter={() => setButtonVisible(true)}
				onMouseLeave={() => setTimeout(() => setButtonVisible(false), 200)}
			>
				{visible ? "Close" : "Theme"}
			</button>
			<Modal isVisible={visible} />
		</div>
	);
};

export default CustomColorPicker;
