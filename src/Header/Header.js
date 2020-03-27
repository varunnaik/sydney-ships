import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),
    0 1px 1px rgba(16, 22, 26, 0.2);
  width: 100%;
  padding: 0 8px;
  height: 35px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 490; /* Keep it below the Atlassian Modal dialog */
`;
const Heading = styled.h1`
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: 1;
`;
export const Header = props => {
  return (
    <HeaderContainer>
      <Heading>Sydney Ships</Heading>
    </HeaderContainer>
  );
};
