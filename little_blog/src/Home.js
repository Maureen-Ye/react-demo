import {useState, useEffect} from 'react';
import BlogList from "./components/Common template/BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [inLoading, setInLoading] = useState(true)
  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   //filter不会更改原始数据，不会更改剩余数据，会返回新数组，过滤useState的内容；id=false删除该数据，筛选后的新数据存储在新数组中，再使用他刷新
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    //重新更新数据时，它讲重新呈现给dom
    //[]依赖项，删除时不会被运行，但改变时会绑定name，setName执行后状态不会再改变和重新渲染，因为此时已经变成了luigi
    setTimeout(() => {
      fetch('  http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setInLoading(false);
          });
    },1000)
  }, []);


  return (
      <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        {inLoading && <div>Loading....</div>}
        {/*<BlogList blogs= {blogs.filter((blog)=>blog.author === 'mario')} title='Mario`s blog'></BlogList>*/}
        {/*<button onClick={() => setName('luigi')}>change me</button>
        <p>{name}</p>*/}
      </div>
  )
}

export default Home;
