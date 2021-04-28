import {useState, useEffect} from 'react';
import BlogList from "./components/Common template/BlogList";
import useFetch from "./usefetch";


const Home = () => {
  /*使用hock*/
  const {data:blogs, inLoading, err} = useFetch('http://localhost:8000/blogs')

  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   //filter不会更改原始数据，不会更改剩余数据，会返回新数组，过滤useState的内容；id=false删除该数据，筛选后的新数据存储在新数组中，再使用他刷新
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }


  return (
      <div className="home">
        {err && <div>{err}</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        {inLoading && <div>Loading....</div>}
        {/*<BlogList blogs= {blogs.filter((blog)=>blog.author === 'mario')} title='Mario`s blog'></BlogList>*/}
        {/*<button onClick={() => setName('luigi')}>change me</button>
        <p>{name}</p>*/}
      </div>
  )
}

export default Home;
