"use client";
import styled, { css } from "styled-components";
import { colors, fonts } from "./theme";
const fontPublicSans = css`
  font-family: ${fonts.primary};
`;
export const fontLexendMega = css`
  font-family: ${fonts.heading};
`;
const fontArchivoBlack = css`
  font-family: ${fonts.secondary};
`;

export const StyledH4 = styled.h4`
  color: ${({ color }) => (color ? color : colors.white)};

  font-size: 0.8;
  margin: 0;
  ${fontPublicSans}
`;

export const StyledH3 = styled.h3`
  color: ${({ color }) => (color ? color : colors.white)};

  font-size: 1.2rem;
  margin: 0;
  ${fontPublicSans}
`;

export const StyledH2 = styled.h2`
  color: ${({ color }) => (color ? color : colors.white)};

  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  ${fontArchivoBlack}
`;

export const StyledH1 = styled.h1`
  color: ${({ color }) => (color ? color : colors.white)};

  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  ${fontArchivoBlack}
`;

export const StyledText = styled.p`
  color: ${({ color }) => (color ? color : colors.white)};
  margin: 0;
  ${fontLexendMega}
`;
