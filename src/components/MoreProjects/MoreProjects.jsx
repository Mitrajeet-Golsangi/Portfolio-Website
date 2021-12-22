import React from "react";
import css from "../Projects/Projects.module.css";
import data from "../Projects/data";
import { ProjectsCard } from "../Projects/Projects";

const MoreProjects = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="base">
			<div
				className={css.wrapper}
				style={{ paddingLeft: "5%", paddingRight: "5%", overflowX: "hidden" }}
			>
				<p className={css.heading}>
					I am Glad you found my projects worth the interest!
				</p>
				<div className={css.layout}>
					{data.map((i, index) => (
						<ProjectsCard
							background={i.img}
							title={i.title}
							body={i.body}
							url={i.url}
							inDev={i.inDev}
							key={index}
							className={css.gridItem}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MoreProjects;
