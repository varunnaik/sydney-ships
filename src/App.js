import React from 'react';
import styled from 'styled-components';
import ViewMenu from './ViewMenu';

const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

const AppHeader = styled.header`
  font-weight: normal;
  position: fixed;
  right: 0;
  background: #ffffff88;
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

const AppH1 = styled.h1`
  font-size: 1em;
  margin: 0 40px 0 5px;
  padding: 0;
  display: inline-block;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader className={'bp3-navbar bp3-align-right'}>
        <AppH1>Sydney Shipping</AppH1>
        <ViewMenu></ViewMenu>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
