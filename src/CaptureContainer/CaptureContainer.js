import React from 'react';
import styled from 'styled-components';
import CaptureRow from '../CaptureRow';

const CaptureContainerContainer = styled.div`
  box-sizing: border-box;
`;

const CaptureItemTitle = styled.h6`
  font-weight: bold;
  width: 1em;
  text-orientation: sideways;
  box-sizing: border-box;
  border-right: 2px solid #88cccc;

  @media screen and (max-width: 600px) {
    text-orientation: normal;
    border-right: 0;
    border-top: 2px solid #88cccc;
  }
`;

export const CaptureContainer = props => {
  const { rows } = props;

  return (
    <CaptureContainerContainer>
      {rows.map(({ items }) => (
        <CaptureRow title={'12 March 2020'} items={items} />
      ))}
    </CaptureContainerContainer>
  );
};
