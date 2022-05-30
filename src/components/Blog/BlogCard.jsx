import React from "react";
import css from "./Blogs.module.css";

const getText = (html) => {
	var divContainer = document.createElement("div");
	divContainer.innerHTML = html;
	return divContainer.textContent || divContainer.innerText || "";
};

const BlogCard = ({ data }) => {
	const [desc, setDesc] = React.useState("");
	React.useEffect(() => {
		setDesc(getText(data.description));
	}, [data.description]);

	return (
		<div className={css.card}>
			<img className={css.thumbnail} src={data.thumbnail} alt="thumbnail" />
			<p className={css.title}>{data.title}</p>
			<p className={css.description}>
				{desc.substring(0, 200)}
				<span className={css.faded}>{getText(desc.substring(200, 220))}</span>
				<br />
				<a className={css.link} href={data.link}>
					Read More
				</a>
			</p>
		</div>
	);
};

export default BlogCard;
