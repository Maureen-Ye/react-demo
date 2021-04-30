import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetail = () => {
  const {id} = useParams();
  /*使用hock*/
  const {data: blog, inLoading, err} = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate()

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  }

  return (
      <div className="blog-detail">
        <h2>blog - {id}</h2>
        {inLoading && <div>Loading...</div>}
        {err && <div>{err}</div>}
        {blog && (
            <article>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <div>{blog.body}</div>
              <button onClick={handleClick}>delete</button>
            </article>
        )}
      </div>

  );
}
export default BlogDetail;
