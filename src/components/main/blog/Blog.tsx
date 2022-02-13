import React from "react";
// import Loading from "../../common/Loading";
import CardBlog from "./CardBlog";
// import useBlog from "./useBlog";
import { blogs } from "./blogs-data";
import { IBlog } from "../../../typing/blog";

function Blog() {
  // const { blogs, loading } = useBlog();

  return (
    <div>
      <div className="main flex flex-wrap justify-center h-full p-0">
        {blogs.length &&
          blogs.map((blog: IBlog, index: number) => (
            <CardBlog blog={blog} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Blog;
