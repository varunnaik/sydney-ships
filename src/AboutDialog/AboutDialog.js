import React from 'react';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import styled from 'styled-components';

const CloseButton = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  text-align: center;
  font-size: 15px;
`;

const ModalBody = styled.div`
  padding: 10px;
  padding-top: 0;
`;

export const AboutDialog = ({ onClose }) => {
  return (
    <>
      <ModalTransition>
        <ModalDialog
          width={'large'}
          onClose={onClose}
          components={{
            Body: React.forwardRef((props, ref) => (
              <ModalBody ref={ref} onClick={onClose}>
                {props.children}
              </ModalBody>
            )),
          }}
        >
          <h2>Sydney Ships Viewer </h2>
          <p>
            This uses a Raspberry Pi with a Pi Camera and an RTL-SDR receiver to capture videos of
            ships transiting the Sydney Harbour.
          </p>
          <p>
            It determines the ship's location based on its AIS broadcasts and triggers a timelapse
            capture of the ship if it is in view of the camera.
          </p>
          <p>
            Project in detail:
            <a href="https://blog.vnaik.com/posts/photographing-ships.html">
              Photographing ships with SDR
            </a>
          </p>
          <p>
            Project on Github: <a href="https://github.com/varunnaik/shippix">Sydney Ships</a>
          </p>
          <ul>
            <li>
              This photographs mostly cruise ships and their refuelling tankers (and sometimes
              freighters) because they are the only ships large enough to show up well on the Pi
              camera.
            </li>
            <li>
              While the setup captures most ships, it sometimes misses ships either because the
              ships have their AIS transponders switched off, or because the capture setup was down.
            </li>
          </ul>
          <p>
            <small>&copy; 2020 Varun Naik</small>
          </p>
          <CloseButton>
            <Button onClick={onClose}>Close</Button>
          </CloseButton>
          <br />
        </ModalDialog>
      </ModalTransition>
    </>
  );
};
