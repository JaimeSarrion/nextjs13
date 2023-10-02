import * as S from "./card.styled";

export default function Card({ children, borderColor, background }) {
  return (
    <S.Container $borderColor={borderColor} $background={background}>
      {children}
    </S.Container>
  );
}
