import React from 'react';
import styled from 'styled-components';
import CaptureItem from '../CaptureItem';

const CaptureRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1px;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const CaptureRowTitle = styled.h6`
  font-weight: bold;
  max-width: 1.2em;
  font-size: 13px;
  text-align: center;
  box-sizing: border-box;
  background: #dd8888;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    border-right: 0;
    background: #deebff;
    order: 1; /* Move title to top instead of bottom */
  }
`;

const TitleBox = styled.div`
  transform: rotate(270deg);
  width: 200px;
  line-height: 1em;
  margin-left: -1px;
  @media screen and (max-width: 600px) {
    transform: rotate(0deg);
    width: auto;
    line-height: auto;
    margin-top: 1px;
  }
`;

export const CaptureRow = ({ title, items, shipInfo, scrollIntoViewRef, scrollPosition }) => {
  return (
    <CaptureRowContainer ref={scrollIntoViewRef}>
      <CaptureRowTitle>
        <TitleBox>{title}</TitleBox>
      </CaptureRowTitle>
      {items.map(item => (
        <CaptureItem
          item={item}
          shipInfo={shipInfo[item.mmsi]}
          key={item.capture}
          scrollPosition={scrollPosition}
        />
      ))}
    </CaptureRowContainer>
  );
};
