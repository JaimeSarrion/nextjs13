"use client";
import styled, { css } from "styled-components";
import { defaultTheme } from "./theme";
const fontPublicSans = css`
  font-family: "Public Sans", sans-serif;
`;
export const fontLexendMega = css`
  font-family: "Lexend Mega", sans-serif;
`;
const fontArchivoBlack = css`
  font-family: "Archivo Black", sans-serif;
`;

export const StyledH4 = styled.h4`
  color: ${({ color }) => (color ? color : defaultTheme.colors.white)};

  font-size: 0.8;
  margin: 0;
  ${fontPublicSans}
`;

export const StyledH3 = styled.h3`
  color: ${({ color }) => (color ? color : defaultTheme.colors.white)};

  font-size: 1.2rem;
  margin: 0;
  ${fontPublicSans}
`;

export const StyledH2 = styled.h2`
  color: ${({ color }) => (color ? color : defaultTheme.colors.white)};

  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  ${fontArchivoBlack}
`;

export const StyledH1 = styled.h1`
  color: ${({ color }) => (color ? color : defaultTheme.colors.white)};

  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  ${fontArchivoBlack}
`;

export const StyledText = styled.p`
  color: ${({ color }) => (color ? color : defaultTheme.colors.white)};
  margin: 0;
  ${fontLexendMega}
`;
