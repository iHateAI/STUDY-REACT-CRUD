import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  height: 100px;
  margin: 0;
`;

const StyledItem = styled.li`
  width: 100px;
  display: inline-block;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
`;

function Menu(props: any): JSX.Element {
  return (
    <StyledList>
      <StyledItem>글 목록</StyledItem>
      <StyledItem>글 생성</StyledItem>
    </StyledList>
  );
}

export default Menu;
