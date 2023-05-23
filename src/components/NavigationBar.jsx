import React from "react";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default NavigationBar;

const Navbar = styled.nav`
  background-color: #202020;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
