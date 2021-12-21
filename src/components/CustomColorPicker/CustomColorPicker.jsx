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

const Modal = ({ isVisible }) => {
	const { color, changeColor } = React.useContext(ColorContext);
	const handleChangeComplete = (c) => {
		changeColor(c.hex, data);
	};

	return isVisible ? (
		<SketchPicker color={color} onChangeComplete={handleChangeComplete} />
	) : null;
};

const CustomColorPicker = () => {
	const [visible, setVisible] = React.useState(false);
	return (
		<div id="colorPicker" style={style}>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
				style={{
					fontStyle: "italic",
					fontFamily: "Lato",
					color: "var(--paragraph-color)",
					backgroundColor: "var(--background)",
					borderRadius: "10px",
					border: "1px solid var(--primary)",
					padding: "5px 15px",
				}}
			>
				Theme
			</button>
			<Modal isVisible={visible} />
		</div>
	);
};

export default CustomColorPicker;
