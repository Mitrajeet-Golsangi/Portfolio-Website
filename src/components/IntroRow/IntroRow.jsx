import React from "react";
import { ReactComponent as Game } from "../../assets/game.svg";
import { ReactComponent as Education } from "../../assets/study.svg";

import css from "./IntroRow.module.css";

const IntroRow = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.row}>
				<Game />
				<p>I love swimming and play badminton, when not playing video games</p>
			</div>
			<div className={css.rowRev}>
				<Education />
				<p>
					Currently, I am Studying in Vishwakarma Institute of Technology, Pune
				</p>
			</div>
		</div>
	);
};

export default IntroRow;
