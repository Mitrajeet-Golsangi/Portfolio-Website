import React from "react";
import ReactModal from "react-modal";
import css from "./ProjectModal.module.css";

const ProjectModal = ({ showModal, title, body, img }) => {
	return (
		<ReactModal isOpen={showModal}>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p>{title}</p>
				</div>
				<div className={css.body}>
					<div className={css.imgWrapper}>
						<img src={img} alt="" />
					</div>
					<div className={css.bodyWrapper}>
						<p dangerouslySetInnerHTML={{ __html: body }}></p>
					</div>
				</div>
			</div>
		</ReactModal>
	);
};

export default ProjectModal;
