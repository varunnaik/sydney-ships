import React from 'react';
import styled from 'styled-components';
import { Navbar, Alignment } from '@blueprintjs/core';
import ViewMenu from './ViewMenu';
const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SydShips</Navbar.Heading>
          <Navbar.Divider />
          <ViewMenu />
        </Navbar.Group>
      </Navbar>
    </AppContainer>
  );
}

export default App;
