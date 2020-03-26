import React from 'react';
import styled from 'styled-components';
import { BASE_MEDIA_PATH, THUMBNAILS_PATH } from '../constants';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  min-height: 168.75px;

  :hover {
    background: rgba(187, 239, 253, 0.3);
    border-color: #888;
    cursor: pointer;
    * > div {
      color: black;
    }
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 6px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
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
  display: border-box;
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
