import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleBlog = () => {
  const params = useParams(); // id, kuchornaam

  const blogList = useOutletContext();

  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const blog = blogList.find((blog) => Number(blog.id) === Number(params.id));

    setBlogData(blog);
  }, [params.id, blogList]);

  return (
    <div>
      <h1>This is single blog page for blog {params.id}</h1>

      <h1>{blogData.id}</h1>
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
    </div>
  );
};

export default SingleBlog;
