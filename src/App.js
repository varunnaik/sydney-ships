import React, { useEffect, useState } from 'react';
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

const onShipSelect = ({ value: mmsi }, allCaptures, setCaptureRows) => {
  clearHash('day');
  const captures = getCapturesByShipAndDate(mmsi, allCaptures);
  setCaptureRows(captures);
};

function App() {
  const [captureRows, setCaptureRows] = useState({});
  const [shipData, setShipData] = useState({ info: {}, highlights: {}, captures: {} });

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
        onShipSelect={v => onShipSelect(v, shipData.captures, setCaptureRows)}
      />
      <Loader />
      <CaptureViewer shipInfo={shipData.info}></CaptureViewer>
      <CaptureContainer rows={captureRows} shipInfo={shipData.info} />
    </AppContainer>
  );
}

export default App;
