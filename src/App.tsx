import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { Post } from "./components/Post";

const TARGET_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    fetch(TARGET_URL).then(async res=>{
      setPosts(await res.json())
    }).catch(err=>setError(err.message))
  }, [])

  if (error) return <p>{error}</p>
  return (
      <>
      <div className="App"> 
        <Pagination 
          data={posts} 
          title='Posts'
          pageLimit={5}
          dataLimit={10}
        />
      </div>
      </>
  );
}