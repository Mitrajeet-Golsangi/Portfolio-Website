import React from "react";
import css from "../Projects/Projects.module.css";
import data from "../Projects/data";
import { ProjectsCard } from "../Projects/Projects";

const MoreProjects = () => {
	return (
		<div className={css.wrapper}>
			<p className={css.heading}>
				I am Glad you found my projects worth the interest!
			</p>
			<div className={css.layout}>
				{data.map((i, index) => (
					<ProjectsCard
						background={i.img}
						title={i.title}
						body={i.body}
						key={index}
						className={css.gridItem}
					/>
				))}
			</div>
		</div>
	);
};

export default MoreProjects;
