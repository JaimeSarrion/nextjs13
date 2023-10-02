import Link from "next/link";
import LikeButton from "./LikeButton";
import Card from '../../components/card/card';
import styled from './posts.module.css';
import {colors} from '../../utils/theme'
import {StyledH3, StyledText} from '../../utils/fonts'

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 8).map((post) => (

    <article key={post.id} className={styled.article}>
      <Card background={colors.light_blue_300} className={styled.content}>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <StyledH3 color={colors.black}>{post.title}</StyledH3>
        </Link>
        <StyledText color={colors.black}>{post.body}</StyledText>
        <LikeButton />
      </Card>
    </article>
  ));
}
