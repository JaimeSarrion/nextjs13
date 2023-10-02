"use client";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  border: 2px solid;
  box-shadow: 4px 6px 0px 0px ${({ $borderColor }) => $borderColor};
  background-color: ${({ $background }) => $background};
`;
