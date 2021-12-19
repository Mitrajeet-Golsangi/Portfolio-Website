import React from "react";
import Game from "../../assets/game.svg";
import Education from "../../assets/study.svg";

import css from "./IntroRow.module.css";

const IntroRow = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.row}>
				<img src={Game} alt="Gaming" />
				<p>I love swimming and play badminton, when not playing video games</p>
			</div>
			<div className={css.rowRev}>
				<img src={Education} alt="Education" />
				<p>
					Currently, I am Studying in Vishwakarma Institute of Technology, Pune
				</p>
			</div>
		</div>
	);
};

export default IntroRow;
