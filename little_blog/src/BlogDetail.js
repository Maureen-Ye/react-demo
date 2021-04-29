import {useParams} from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetail = () => {
  const { id } = useParams();

  console.log(id);
  /*使用hock*/
  const {data: blog, inLoading, err} = useFetch('http://localhost:8000/blogs/' + id);

  return (
<div>
  <h2>blog - {id}</h2>
        {inLoading && <div>Loading...</div>}
        {err && <div>{err}</div>}
        {blog && (
            <article>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <div>{blog.body}</div>
            </article>
        )}
</div>

  );
}
export default BlogDetail;
