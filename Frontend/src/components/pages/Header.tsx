import React from "react";
import styled from "styled-components";
import Menu from "../ui/Menu";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: grey;
  display: flex;
  justify-content: center;
`;

function Header(props: any): JSX.Element {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
}

export default Header;
