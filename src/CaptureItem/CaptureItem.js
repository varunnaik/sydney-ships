import React from 'react';
import styled from 'styled-components';
import { BASE_MEDIA_PATH, THUMBNAILS_PATH } from '../constants';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  min-width: 300px;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  :hover {
    border: 1px solid #000;
    cursor: pointer;
    * > div {
      color: black;
    }
  }
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

const CaptureDateTime = styled.div`
  padding-left: 8px;
  color: #666;
`;

const CaptureTime = styled.div`
  display: inline-block;
`;

const CaptureDate = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: inline;
  }
`;

const CaptureItemPoster = styled.img`
  width: 300px;
  padding: 0;
  margin: 0;
  border: 0;
  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

const getShortDescription = description => {
  if (description === 'Not available (default)') {
    return 'Not Available';
  }
  return description.split(' ')[0].replace(/,$/, '');
};

export const CaptureItem = ({ item, shipInfo }) => {
  console.log(item);
  const { description, name } = shipInfo[item.mmsi];
  return (
    <CaptureItemContainer>
      <CaptureDateTime>
        <CaptureDate>{item.dateLabel}&nbsp;</CaptureDate>
        <CaptureTime>{item.time}</CaptureTime>
      </CaptureDateTime>
      <CaptureItemPoster
        src={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${item.capture}.jpg`}
      ></CaptureItemPoster>
      <CaptureItemTitle>
        {name} ({getShortDescription(description)})
      </CaptureItemTitle>
    </CaptureItemContainer>
  );
};
