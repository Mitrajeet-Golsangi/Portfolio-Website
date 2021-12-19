import React from "react";
import WebDev from "../../assets/webDev.svg";
import FlutterDev from "../../assets/flutter dev.svg";

import css from "./Skills.module.css";
const SkillsCardWeb = () => {
	return (
		<div className={css.card}>
			<h1 className={css.cardHeading}>Web Development</h1>
			<div>
				<hr className={css.headingHr} />
				<p className={css.cardSubheading}>
					I am a full stack web developer managing frontend, backend and hosting
				</p>
				<hr className={css.subheadingHr} />
			</div>
			<h6 className={css.bodyHeading}>Tools I Use</h6>
			<div className={css.innerRow}>
				<div className={css.col}>
					<ul className={css.outerList}>
						<li>
							Frontend
							<ul className={css.innerList}>
								<li>HTML</li>
								<li>CSS</li>
								<li>Vanilla JS</li>
								<li>React JS</li>
							</ul>
						</li>
						<li>
							Backend
							<ul className={css.innerList}>
								<li>Django</li>
								<li>Node JS</li>
							</ul>
						</li>
						<li>
							Hosting
							<ul className={css.innerList}>
								<li>Heroku</li>
								<li>Github Pages</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={css.col}>
					<img src={WebDev} alt="Web Development" />
				</div>
			</div>
		</div>
	);
};

const SkillsCardMobile = () => {
	return (
		<div className={css.card}>
			<h1 className={css.cardHeading}>Mobile App Development</h1>
			<div>
				<hr className={css.headingHr} />
				<p className={css.cardSubheading}>
					As every programmer, I too hate to have a huge code base
				</p>
				<hr className={css.subheadingHr} />
			</div>
			<h6 className={css.bodyHeading}>Tools I Use</h6>
			<div className={css.innerRow}>
				<div className={css.col}>
					<ul className={css.outerList}>
						<li>
							Java
							<ul className={css.innerList}>
								<li>Basics</li>
							</ul>
						</li>
						<li>
							Flutter
							<ul className={css.innerList}>
								<li>Majorly for Apps</li>
								<li>BLoC Arch.</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={css.col}>
					<img src={FlutterDev} alt="Web Development" />
				</div>
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<div className={css.wrapper}>
			<p className={css.heading}>I have some skills worth mentioning</p>
			<div className={css.row}>
				<SkillsCardWeb />
				<SkillsCardMobile />
			</div>
		</div>
	);
};

export default Skills;
