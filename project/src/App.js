import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Post = ({ title, body }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{body}</p>
    </Card>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch posts from the API and store them in the 'posts' state
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data));
  }, []);

  const handleFilter = () => {

    const filtered = posts.filter((post) => post.title.includes(searchText));
    setFilteredPosts(filtered);
  };

  return (
    <div style={{ textAlign: 'center' }}>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        style={{ margin: '10px' }}
      />
      <button onClick={handleFilter}>Search</button>


      {filteredPosts.length > 0
        ? filteredPosts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        : posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))}
    </div>
  );
};

export default App;