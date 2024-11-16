import { useState, useEffect } from 'react';

function FetchPosts() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(posts => {
            setPosts(posts)
            setLoading(false);
          });
      }, []);
    
      if (loading) return <h2>Loading...</h2>;
      
      return (
        <div>
          <h1>Data:</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default FetchPosts;
    
