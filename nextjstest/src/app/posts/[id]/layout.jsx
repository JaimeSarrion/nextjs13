import Link from "next/link";
import Card from '../../../components/card/card';
import {colors} from '../../../utils/theme';
import {StyledH3, StyledText} from '../../../utils/fonts';
import styled from '../posts.module.css';

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function Post({ params, children }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <Card background={colors.light_blue_300} className={styled.content}>
        <StyledH3>{post.title}</StyledH3>
        <StyledText>{post.body}</StyledText>
        <Link href="/posts/[id]/comments" as={`/posts/${post.id}/comments`}>
          <StyledText>See comments</StyledText>
        </Link>
        {children}
      </Card>
    </article>
  );
}
