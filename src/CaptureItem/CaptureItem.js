import React, { memo, createRef } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BASE_MEDIA_PATH, THUMBNAILS_PATH, PLACEHOLDER_THUMBNAIL } from '../constants';
import { setLocationHash } from '../utils';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  min-height: 266px;
  background: white;
  width: 400px;

  :hover {
    background: rgba(187, 239, 253, 0.3);
    border-color: #888;
    cursor: pointer;
    * > div {
      color: black;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 6px;
    margin-right: 0;
    min-height: 220px;
    border-right: 0;
    border-left: 0;
  }

  // Fix for react-lazy-image-load component
  .lazy-load-image-background {
    flex-grow: 1 !important;
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

const CaptureItemPoster = styled(LazyLoadImage)`
  border: 0;
  width: 400px;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 100%;
  }
`;

const arePropsEqual = (oldProps, newProps) => {
  return (
    oldProps.shipInfo.name === newProps.shipInfo.name &&
    oldProps.item.capture === newProps.item.capture
  );
};

const getShortDescription = description => {
  if (description === 'Not available (default)') {
    return 'Not Available';
  }
  return description.split(' ')[0].replace(/,$/, '');
};

export const CaptureItem = memo(({ item, shipInfo, scrollPosition }) => {
  const { description, name } = shipInfo;
  const imgRef = createRef();

  return (
    <CaptureItemContainer onClick={() => setLocationHash('capture', item.capture)}>
      <CaptureDateTime>
        <CaptureDate>{item.dateLabel}&nbsp;</CaptureDate>
        <CaptureTime>{item.time}</CaptureTime>
      </CaptureDateTime>
      <CaptureItemPoster
        ref={imgRef}
        effect={'blur'}
        scrollPosition={scrollPosition}
        src={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${item.capture}.jpg`}
        placeholderSrc={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${PLACEHOLDER_THUMBNAIL}`}
      ></CaptureItemPoster>

      <CaptureItemTitle>
        {name} ({getShortDescription(description)})
      </CaptureItemTitle>
    </CaptureItemContainer>
  );
}, arePropsEqual);
