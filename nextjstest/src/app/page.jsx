import { StyledH1, StyledText } from "../utils/fonts";
import Card from "../components/card/card";
import { colors } from "../utils/theme";
import styled from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <StyledH1 color={colors.black}>Home Page</StyledH1>
      <Card background={colors.yellow_100}>
        <StyledText className={styled.text} color={colors.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </StyledText>
      </Card>
    </>
  );
}
