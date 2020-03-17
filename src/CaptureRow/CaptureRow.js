import React from 'react';
import styled from 'styled-components';
import CaptureItem from './CaptureItem';

const CaptureRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contnent: flex-start;

  @media (screen) and max-width(400px) {
    flex-direction: column;
  }
`;

const CaptureRowTitle = styled.h6`
  font-weight: bold;
  width: 1em;
  text-orientation: sideways;
  box-sizing: border-box;
  border-right: 2px solid #88cccc;

  @media (screen) and max-width(400px) {
    text-orientation: normal;
    border-right: 0;
    border-top: 2px solid #88cccc;
  }
`;

export const CaptureRow = props => {
  const { captureRowTitle, captureRowItems } = props;

  return (
    <CaptureRowContainer>
      <CaptureRowTitle>{captureRowTitle}</CaptureRowTitle>
      {captureRowItems.map(item => (
        <CaptureItem item={item} numItems={captureRowItems.length} />
      ))}
    </CaptureRowContainer>
  );
};
