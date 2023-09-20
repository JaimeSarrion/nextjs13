import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 8).map((post) => (
    <article key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
}
