import React, { useState, useLayoutEffect } from 'react';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import styled from 'styled-components';
import { getCaptureDetails } from '../fileparser';
import { BASE_MEDIA_PATH, VIDEOS_PATH } from '../constants';

const CloseButton = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  color: blue;
`;

const CaptureHeader = styled.h4`
  margin-bottom: 2px;
`;

const Details = styled.div`
  margin: 5px 0 5px 0;
`;

const DetailsSpan = styled.span`
  padding-right: 5px;
  margin-right: 5px;
  border-right: 2px solid #ccc;

  & :last-child {
    border: 0;
  }
`;

const getCaptureFromHash = () => {
  const match = window.location.hash.match(/capture=([^&]*)/);
  return match && match.pop();
};

const resetHash = () => {
  window.location.hash = window.location.hash.replace(/[&]+capture=\d*/, '');
};

const showHideViewer = (setCaptureDetails, shipInfo) => {
  const capture = getCaptureFromHash();

  if (capture) {
    return setCaptureDetails(getCaptureDetails(capture, shipInfo));
  }
  return setCaptureDetails(null);
};

export const CaptureViewer = ({ shipInfo }) => {
  const [captureDetails, setCaptureDetails] = useState(null);

  // Logic to show/hide self
  useLayoutEffect(() => {
    // If user types in new day scroll to it immediately
    window.addEventListener('hashchange', () => showHideViewer(setCaptureDetails, shipInfo));

    return () => {
      window.removeEventListener('hashchange', () => showHideViewer(setCaptureDetails, shipInfo));
    };
  });

  useLayoutEffect(() => {
    showHideViewer(setCaptureDetails, shipInfo);
  }, [shipInfo]);

  return (
    <>
      <ModalTransition>
        {captureDetails && (
          <ModalDialog width={'large'} onClose={resetHash} style={{ padding: 0 }}>
            <CaptureHeader>{captureDetails.name || 'unknown'}</CaptureHeader>
            <video width="100%" controls>
              <source
                src={`${BASE_MEDIA_PATH}${VIDEOS_PATH}${captureDetails.capture}.mp4`}
                type="video/webm"
              />
            </video>
            <div>
              {captureDetails.timeLabel}
              <Details>
                <DetailsSpan>Type: {captureDetails.description || 'Unknown class'}</DetailsSpan>
                <DetailsSpan>MMSI: {captureDetails.mmsi || 'Unknown'}</DetailsSpan>
                <DetailsSpan>Size: {captureDetails.size || 'Unknown'}</DetailsSpan>
              </Details>
            </div>
            <CloseButton>
              <Button onClick={resetHash}>Close</Button>
            </CloseButton>
            <br />
          </ModalDialog>
        )}
      </ModalTransition>
    </>
  );
};
