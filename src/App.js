import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCapturesByDate } from './fileparser';
import CaptureContainer from './CaptureContainer';
import CaptureViewer from './CaptureViewer';
import Header from './Header';
import { BASE_MEDIA_PATH, MANIFEST_FILE } from './constants';

const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

function App() {
  const [captureRows, setCaptureRows] = useState({});
  const [shipInfo, setShipInfo] = useState({});

  useEffect(() => {
    const fetchCaptures = async () => {
      const data = await fetch(`${BASE_MEDIA_PATH}${MANIFEST_FILE}`).then(response =>
        response.json()
      );
      setShipInfo(data.info);
      setCaptureRows(getCapturesByDate(data));
    };

    fetchCaptures();
  }, []);

  return (
    <AppContainer>
      <Header />
      <CaptureViewer shipInfo={shipInfo}></CaptureViewer>
      <CaptureContainer rows={captureRows} shipInfo={shipInfo} />
    </AppContainer>
  );
}

export default App;
