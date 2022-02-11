import React from "react";
import Loading from "../../common/Loading";
import CardBlog from "./CardBlog";
import useBlog from "./useBlog";

function Blog() {
  const { blogs, loading } = useBlog();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="main flex flex-wrap justify-center h-full p-0">
          {blogs.length &&
            blogs.map((blog, index) => <CardBlog blog={blog} key={index} />)}
        </div>
      )}
    </div>
  );
}

export default Blog;
