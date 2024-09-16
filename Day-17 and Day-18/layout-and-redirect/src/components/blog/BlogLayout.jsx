import { Link, Outlet } from "react-router-dom";

const blogsList = [
  {
    id: 1,
    title: "Blog 1",
    description: "Blog 1 description",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Blog 2 description",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Blog 3 description",
  },
];

const BlogLayout = () => {
  return (
    <main>
      <h1>This is blog layout</h1>

      {/* Card */}

      <ul>
        {blogsList.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>

      {/* single Blog content */}
      <Outlet context={blogsList} />
    </main>
  );
};

export default BlogLayout;
