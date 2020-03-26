import React from 'react';
import styled from 'styled-components';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  min-width: 280px;
  height: 190px;
  background: #ccc;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #000;
  display: inline-block;
`;

const CaptureItemTitle = styled.div`
  display: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-left: 8px;
  @media screen and (max-width: 600px) {
  }
`;

const CaptureItemPoster = styled.img`
  min-height: 165px;
  padding: 0;
  margin: 0;
`;

export const CaptureItem = ({ item, shipInfo }) => {
  console.log(shipInfo, item.mmsi);
  const { description, name } = shipInfo[item.mmsi];
  return (
    <CaptureItemContainer>
      <CaptureItemPoster></CaptureItemPoster>
      <CaptureItemTitle>
        <em>{item.time}</em> {name} ({description.split(' ')[0]})
      </CaptureItemTitle>
    </CaptureItemContainer>
  );
};
