import React from 'react';
import styled from 'styled-components';
import { Navbar, Alignment } from '@blueprintjs/core';
import ViewMenu from './ViewMenu';
import CaptureContainer from './CaptureContainer';

const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

const captureRows = [
  { items: [1, 2, 3, 4] },
  { items: [1] },
  { items: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { items: [1, 2, 3, 4, 5, 6] },
  { items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
];

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
      <CaptureContainer rows={captureRows} />
    </AppContainer>
  );
}

export default App;
