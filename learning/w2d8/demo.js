const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
};

(async () => {
    const result = await fetchPosts();
    console.log(result);
})();
