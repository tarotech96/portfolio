import { useEffect, useState } from 'react';
import { IBlog } from './../../../typing/blog';
import { getBlogs } from "../../../services/blog.server";

const useBlog = (): {
  blogs: IBlog[],
  loading: boolean
} => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getBlogs()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);
  return { blogs, loading };
}

export default useBlog;
