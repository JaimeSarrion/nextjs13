import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 8).map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
}
