//api
//fetches and returns all Posts from API
export const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return res;
};
