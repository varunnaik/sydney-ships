import React, { useState, useLayoutEffect } from 'react';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import styled from 'styled-components';
import { getCaptureDetails } from '../fileparser';
import { BASE_MEDIA_PATH, VIDEOS_PATH } from '../constants';
import { clearHash } from '../utils';

const CloseButton = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  color: blue;
`;

const CaptureLabelContainer = styled.div`
  @media screen and (max-width: 600px) {
    padding-left: 4px;
  }
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

const ModalBody = styled.div`
  padding: 10px;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const getCaptureFromHash = () => {
  const match = window.location.hash.match(/capture=([^&]*)/);
  return match && match.pop();
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
          <ModalDialog
            width={'large'}
            onClose={() => clearHash('capture')}
            components={{
              Body: React.forwardRef((props, ref) => (
                <ModalBody ref={ref}>{props.children}</ModalBody>
              )),
            }}
          >
            <CaptureLabelContainer>
              <CaptureHeader>{captureDetails.name || 'unknown'}</CaptureHeader>
            </CaptureLabelContainer>
            <video width="100%" controls>
              <source
                src={`${BASE_MEDIA_PATH}${VIDEOS_PATH}${captureDetails.capture}.mp4`}
                type="video/webm"
              />
            </video>
            <CaptureLabelContainer>
              {captureDetails.timeLabel}
              <Details>
                <DetailsSpan>Type: {captureDetails.description || 'Unknown class'}</DetailsSpan>
                <DetailsSpan>MMSI: {captureDetails.mmsi || 'Unknown'}</DetailsSpan>
                <DetailsSpan>Size: {captureDetails.size || 'Unknown'}</DetailsSpan>
              </Details>
            </CaptureLabelContainer>
            <CloseButton>
              <Button onClick={() => clearHash('capture')}>Close</Button>
            </CloseButton>
            <br />
          </ModalDialog>
        )}
      </ModalTransition>
    </>
  );
};
