import React from "react";
import ReactModal from "react-modal";
import css from "./ProjectModal.module.css";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const ProjectModal = ({ showModal, title, body, img, url, inDev }) => {
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
						<div style={{ display: "flex", alignItems: "flex-end" }}>
							{inDev ? <div className="inDev">In Development</div> : null}
							{url ? (
								<a href={url} target="_blank" rel="noreferrer">
									Research Paper
									<BsFileEarmarkPdfFill size={30} />
								</a>
							) : null}
						</div>
						<p dangerouslySetInnerHTML={{ __html: body }}></p>
					</div>
				</div>
			</div>
		</ReactModal>
	);
};

export default ProjectModal;
