import * as S from "./card.styled";

export default function Card({ children, borderColor, background, className }) {
  return (
    <S.Container className={className} $borderColor={borderColor} $background={background}>
      {children}
    </S.Container>
  );
}
