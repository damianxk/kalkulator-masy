import React, { useEffect, useState } from 'react'

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://www.kalkulatorstali.com/blog/wp-json/wp/v2/posts", { method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setPosts(data[0].posts);
        console.log(posts);
      })
      .catch((error) => console.log(error));
    }, []);
  return (
    <div>PostList</div>
  )
}

export default PostList