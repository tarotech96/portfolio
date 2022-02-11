import React, { useCallback } from "react";
import { IBlog } from "../../../typing/blog";

const CardBlog: React.FC<{ blog: IBlog }> = ({ blog }) => {
  const handleClick = useCallback((url: string) => {
    window.location.href = url;
  }, []);
  return (
    <div className="card-blog rounded shadow w-80 lg:w-96 cursor-pointer mx-2 my-2 pb-4">
      <title>{blog.title}</title>
      <img
        src={blog.urlToImage}
        alt={blog.title}
        onClick={() => handleClick(blog.url)}
      />
      <h4 className="text-[#e4ee89] text-base font-bold ml-4 mt-[1rem] break-all">
        {blog.author ?? "Anonymous"}
      </h4>
      <p className="text-pink-300 text-sm break-all ml-4 mt-4 w-[90%]">
        {blog.description}
      </p>
    </div>
  );
};

export default CardBlog;
