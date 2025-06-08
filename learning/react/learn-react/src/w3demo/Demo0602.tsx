import React, { useEffect, useState } from "react";
import "./style.css";

const url = "https://dummyjson.com/posts";

function Demo0602() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const [selectedTag, setSelectTag] = useState("")
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data.posts);
        const res2 = await fetch('https://dummyjson.com/posts/tag-list');
        const data2 = await res2.json()
        setTags(data2)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const RenderPosts = () => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchWord.toLowerCase())
    ).filter((post) => {
        return selectedTag === "" || post.tags.reduce((acum, tag) => {
            return acum || tag === selectedTag;
        }, false)
    });

    if (filtered.length > 0) {
      return (
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>TAGS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
          </tbody>
        </table>
      );
    } else {
      return "No Result";
    }
  };

  return (
    <div>
      Demo0602
      <div>
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={() => setSearchWord("")}>Clear</button>
        <select value={selectedTag} onChange={(e) => {
            setSelectTag(e.target.value)
        }}>
            <option value="">Please Select</option>
            {tags.map((tag) => {
                return <option value={tag}>{tag}</option>
            })}
        </select>
      </div>
      <br />
      <div>{isLoading ? "Loading..." : <RenderPosts />}</div>
    </div>
  );
}

function Post({ post }) {
//   const limit = 100;
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.tags.join(", ")}</td>
      {/* <td>
        {post.body.length > limit
          ? post.body.slice(0, limit) + "..."
          : post.body}
      </td> */}
    </tr>
  );
}

export default Demo0602;
