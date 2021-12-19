import React from "react";
import Project from "../../assets/projects.svg";

import MoneyManager from "../../assets/Image 1.svg";
import LPG from "../../assets/LGP_GAS_Detection.svg";
import GameDev from "../../assets/Image 2.svg";
import FlutterSnips from "../../assets/Image 3.svg";
import AQIPred from "../../assets/Image 4.svg";

import css from "./Projects.module.css";
import { Element } from "react-scroll/modules";

const ProjectsCard = ({ background, title }) => {
	return (
		<div
			className={css.card}
			style={{
				background: `linear-gradient(var(--card-overlay-black), var(--card-overlay-black)), url('${background}')`,
				backgroundSize: "cover",
				backgroundPosition: "top right",
				height: "50vh",
			}}
		>
			<div className={css.headingWrapper}>
				<p className={css.cardHeading}>{title}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<Element id="portfolio">
			<div className={css.wrapper}>
				<p className={css.heading}>
					No? That's Quite alright
					<br /> Let me show you some of my work
				</p>
				<img src={Project} alt="Project" />
				<div className={css.layout}>
					<ProjectsCard
						className={css.gridItem}
						background={MoneyManager}
						title="Money Manager"
					/>
					<ProjectsCard
						className={css.gridItem}
						background={LPG}
						title="LPG Gas Detection"
					/>
					<ProjectsCard
						className={css.gridItem}
						background={GameDev}
						title="Game Development"
					/>
					<ProjectsCard
						className={css.gridItem}
						background={FlutterSnips}
						title="Flutter Snippets"
					/>
					<ProjectsCard
						className={css.gridItem}
						background={AQIPred}
						title="AQI Prediction Model"
					/>
				</div>
				<button className="button">More Projects</button>
			</div>
		</Element>
	);
};

export default Projects;
