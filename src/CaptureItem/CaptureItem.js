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
  min-height: 200px;
  background: white;

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
    margin-right: 0;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
    min-height: 199px;
    @media screen and (max-width: 600px) {
      box-shadow: none;
      border-right: 0;
      border-left: 0;
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

  @media screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

const CaptureItemPoster = styled(LazyLoadImage)`
  border: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
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
      <CaptureItemPosterContainer
        poster={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${PLACEHOLDER_THUMBNAIL}`}
        child={imgRef}
      >
        <CaptureItemPoster
          ref={imgRef}
          effect={'blur'}
          scrollPosition={scrollPosition}
          src={`${BASE_MEDIA_PATH}${THUMBNAILS_PATH}${item.capture}.jpg`}
        ></CaptureItemPoster>
      </CaptureItemPosterContainer>

      <CaptureItemTitle>
        {name} ({getShortDescription(description)})
      </CaptureItemTitle>
    </CaptureItemContainer>
  );
}, arePropsEqual);
