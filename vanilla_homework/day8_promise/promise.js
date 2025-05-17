export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
    return await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
    const results = [];
    for (let cur of order) {
        const result = await promises[cur - 1];
        results.push(result);
    }
    return results;
};
