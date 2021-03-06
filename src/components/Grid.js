import React from "react";
import styled from "styled-components";

import Square from "./GridItem";
import { ROW, COLUMN } from "../constants/constants";

// styling for the grid, decided a grid was the best way to contain and organize the
// displayed grid.
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${COLUMN}, 1fr);
  grid-template-rows: repeat(${ROW}, 1fr);
`;

export default function Grid(grid) {
  const squareList = grid.grid
    .flat()
    .map((curr, i) => <Square key={i} status={curr} />);

  return <Container>{squareList}</Container>;
}
