import React from 'react';
import styled from 'styled-components';

const CaptureItemContainer = styled.div`
  box-sizing: border-box;
  min-width: 200px;
  height: 170px;
  background: #ccc;
  margin-right: 1px;
  margin-bottom: 1px;
  border: 1px solid #000;
  display: inline-block;
`;

const CaptureItemTitle = styled.h6`
  font-weight: bold;
  width: 1em;
  text-orientation: sideways;
  box-sizing: border-box;
  border-right: 2px solid #88cccc;

  @media screen and (max-width: 500px) {
    text-orientation: normal;
    border-right: 0;
    border-top: 2px solid #88cccc;
  }
`;

export const CaptureItem = props => {
  const { item, numItems } = props;

  return <CaptureItemContainer></CaptureItemContainer>;
};
