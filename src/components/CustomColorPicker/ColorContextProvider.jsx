import React from "react";

const r = document.querySelector(":root");
const rs = getComputedStyle(r);

export const ColorContext = React.createContext(
	rs.getPropertyValue("--primary")
);

const ColorContextProvider = (props) => {
	const [color, setColor] = React.useState(rs.getPropertyValue("--primary"));

	const changeColor = (c, ids) => {
		setColor(c);
		r.style.setProperty("--primary", c);
		for (let i = 0; i < ids.length; i++) {
			document
				.querySelectorAll(`#${ids[i]}`)
				.forEach((v, i, a) => (v.style.fill = c));
		}
	};

	return (
		<ColorContext.Provider
			value={{
				color: color,
				changeColor: changeColor,
			}}
		>
			{props.children}
		</ColorContext.Provider>
	);
};

export default ColorContextProvider;
