import React from 'react';
import styled from 'styled-components';
import CaptureItem from '../CaptureItem';

const CaptureRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CaptureRowTitle = styled.h6`
  font-weight: bold;
  max-width: 1.8em;
  font-size: 13px;
  text-align: center;
  text-orientation: sideways;
  box-sizing: border-box;
  background: #dd8888;
  writing-mode: sideways-lr;
  margin: 0;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    writing-mode: horizontal-tb;
    text-orientation: normal;
    border-right: 0;
  }
`;

export const CaptureRow = ({ title, items, shipInfo, scrollIntoViewRef }) => {
  return (
    <CaptureRowContainer ref={scrollIntoViewRef}>
      <CaptureRowTitle>{title}</CaptureRowTitle>
      {items.map(item => (
        <CaptureItem item={item} shipInfo={shipInfo} key={item.capture} />
      ))}
    </CaptureRowContainer>
  );
};
