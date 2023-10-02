import { StyledH1, StyledText } from "../../utils/fonts";
import {colors} from '../../utils/theme';
import Card from '../../components/card/card';
import styled from '../homePage.module.css';

export default function AboutPage() {
  return (
    <Card background={colors.yellow_100}  className={styled.text}>
    <StyledH1 color={colors.black}>About Page</StyledH1>
    <StyledText color={colors.black}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </StyledText>
  </Card>
    
  )
}
