import React from "react";
import { ReactComponent as Project } from "../../assets/projects.svg";

import css from "./Projects.module.css";
import { Element } from "react-scroll/modules";
import { Link } from "react-router-dom";
import ProjectModal from "../ProjectModal/ProjectsModal";
import data from "./data";

export const ProjectsCard = ({ background, title, body, url, inDev }) => {
	const [openModal, setOpenModal] = React.useState(false);

	if (openModal) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "scroll";
	}

	const toggleModal = () => setOpenModal((prev) => !prev);
	return (
		<div
			onClick={toggleModal}
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
			<ProjectModal
				showModal={openModal}
				title={title}
				body={body}
				img={background}
				url={url}
				inDev={inDev}
			/>
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
				<Project />
				<div className={css.layout}>
					{data.slice(0, 6).map((i, index) => (
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
				<Link to="/projects" className="button">
					More Projects
				</Link>
			</div>
		</Element>
	);
};

export default Projects;
