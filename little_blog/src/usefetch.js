import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [inLoading, setInLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController();

    //重新更新数据时，它讲重新呈现给dom
    //[]依赖项，删除时不会被运行，但改变时会绑定name，setName执行后状态不会再改变和重新渲染，因为此时已经变成了luigi
    setTimeout(() => {
      fetch(url,{signal:abortCount.signal})
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch the data for the resource')
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setInLoading(false);
            setErr(null)
          })
          .catch(err => {
            if(err.name === 'AbortError'){
              console.log('fetch aborted');
            }else {
              setInLoading(false);
              setErr(err.message)
            }
          })
    },500 )

    return() => abortCount.abort();
  }, [url]);

  return {data, inLoading, err}
}
export default useFetch;
