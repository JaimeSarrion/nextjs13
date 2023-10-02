import Card from '../../../../components/card/card';
import {colors} from '../../../../utils/theme';
import {StyledH4, StyledText} from '../../../../utils/fonts';
import styled from '../../posts.module.css';

const fetchComments = async (id) => {
  await new Promise((resolve, reject) => {
    return setTimeout(resolve, 3000);
  });
 /*  throw new Error('Error al cargar los componentes') */
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <Card background={colors.green_100}>
      <ul className={styled.commentsUl}>
        {comments.map((comment) => (
          <li className={styled.commentsLi} key={comment.id}>
            <StyledH4 color={colors.black}>{comment.name}</StyledH4>
            <small>{comment.body}</small>
          </li>
        ))}
      </ul>
    </Card>
  );
}
