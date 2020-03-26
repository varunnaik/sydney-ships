import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navbar, Alignment } from '@blueprintjs/core';
import { getCapturesByDate } from './fileparser';
import CaptureContainer from './CaptureContainer';

const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

function App() {
  const [captureRows, setCaptureRows] = useState({});
  const [shipInfo, setShipInfo] = useState({});

  useEffect(() => {
    const fetchCaptures = async () => {
      const data = await fetch(
        'https://s3-ap-southeast-2.amazonaws.com/shippix/captures.json'
      ).then(response => response.json());
      setShipInfo(data.info);
      setCaptureRows(getCapturesByDate(data));
    };

    fetchCaptures();
  }, []);

  return (
    <AppContainer>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SydShips</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
      </Navbar>
      <CaptureContainer rows={captureRows} shipInfo={shipInfo} />
    </AppContainer>
  );
}

export default App;
