import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BASE_MEDIA_PATH, THUMBNAILS_PATH, PLACEHOLDER_THUMBNAIL } from '../constants';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  min-height: 206.75px;

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
    min-height: 299px;
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

const CaptureItemPosterContainer = styled.div`
  background: url(${props => props.poster});
  background-size: cover;
  width: 400px;
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

const CaptureItemPoster = styled(LazyLoadImage)`
  border: 0;
  width: 100%;
`;

const getShortDescription = description => {
  if (description === 'Not available (default)') {
    return 'Not Available';
  }
  return description.split(' ')[0].replace(/,$/, '');
};

const setLocationHash = capture => {
  let hash = window.location.hash;
  const currentCapture = window.location.hash.match(/capture=([^&]*)/);

  if (currentCapture && currentCapture.length > 1) {
    window.location.hash = hash.replace(currentCapture.pop(), capture);
  } else {
    window.location.hash = window.location.hash + `&capture=${capture}`;
  }
};

export const CaptureItem = ({ item, shipInfo, scrollPosition }) => {
  const { description, name } = shipInfo[item.mmsi];

  return (
    <CaptureItemContainer onClick={() => setLocationHash(item.capture)}>
      <CaptureDateTime>
        <CaptureDate>{item.dateLabel}&nbsp;</CaptureDate>
        <CaptureTime>{item.time}</CaptureTime>
      </CaptureDateTime>
      <CaptureItemPosterContainer
        poster={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${PLACEHOLDER_THUMBNAIL}`}
      >
        <CaptureItemPoster
          scrollPosition={scrollPosition}
          src={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${item.capture}.jpg`}
        ></CaptureItemPoster>
      </CaptureItemPosterContainer>

      <CaptureItemTitle>
        {name} ({getShortDescription(description)})
      </CaptureItemTitle>
    </CaptureItemContainer>
  );
};
