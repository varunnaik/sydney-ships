import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { getCapturesByDate, getCapturesByShipAndDate } from './fileparser';
import CaptureContainer from './CaptureContainer';
import CaptureViewer from './CaptureViewer';
import Header from './Header';
import { BASE_MEDIA_PATH, MANIFEST_FILE } from './constants';
import { clearHash } from './utils';

const AppContainer = styled.section`
  @import url('https://use.typekit.net/hkh4msx.css');
  font-family: fira-sans, sans-serif;
`;

const Loader = styled.div`
  position: fixed;
  z-index: -2;
  height: 50px;
  width: 100%;
  font-size: 16px;
  margin: 50px 0 0 10px;
  ::before {
    content: 'Loading...';
  }
`;

function App() {
  const [captureRows, setCaptureRows] = useState({});
  const [shipData, setShipData] = useState({ info: {}, highlights: {}, captures: {} });

  const onShipSelect = useCallback(
    ({ value: mmsi }) => {
      clearHash('day');
      const captures = getCapturesByShipAndDate(mmsi, shipData.captures);
      setCaptureRows(captures);
    },
    [setCaptureRows, shipData]
  );

  useEffect(() => {
    const fetchCaptures = async () => {
      const data = await fetch(`${BASE_MEDIA_PATH}${MANIFEST_FILE}`).then(response =>
        response.json()
      );

      setShipData(data);
      setCaptureRows(getCapturesByDate(data));
    };

    fetchCaptures();
  }, []);

  return (
    <AppContainer>
      <Header
        dates={Object.keys(captureRows)}
        highlights={shipData.highlights}
        shipInfo={shipData.info}
        onShipSelect={onShipSelect}
      />
      <Loader />
      <CaptureViewer shipInfo={shipData.info}></CaptureViewer>
      <CaptureContainer rows={captureRows} shipInfo={shipData.info} />
    </AppContainer>
  );
}

export default App;
