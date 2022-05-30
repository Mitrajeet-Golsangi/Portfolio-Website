import React from "react";
import ColorContextProvider from "../CustomColorPicker/ColorContextProvider";
import CustomColorPicker from "../CustomColorPicker/CustomColorPicker";
import projectsCSS from "../Projects/Projects.module.css";
import BlogCard from "./BlogCard";
import css from "./Blogs.module.css";
import GoBackBar from "../GoBackBar/GoBackBar";

const Posts = () => {
	const [data, setData] = React.useState([]);
	const link =
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mitrajeetgolsangi";

	React.useEffect(() => {
		fetch(link)
			.then((e) => e.json())
			.then((d) => setData(d["items"]));
	}, [data]);

	return (
		<div className="base" style={{ overflowY: "hidden" }}>
			<ColorContextProvider>
				<GoBackBar />
				<CustomColorPicker />
				<p className={projectsCSS.heading}>
					These are some of my blog posts on{" "}
					<a
						href="https://medium.com/@mitrajeetgolsangi"
						target="_blank"
						rel="noreferrer"
						style={{ color: "var(--primary)" }}
					>
						Medium
					</a>
				</p>
				<div className={css.blogCardsLayout}>
					{data.map((i) => (
						<BlogCard data={i} />
					))}
				</div>
			</ColorContextProvider>
		</div>
	);
};

export default Posts;
