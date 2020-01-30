import React from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button } from '@blueprintjs/core';

const ViewMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ViewMenuLabel = styled.div`
  margin-right: 8px;
`;

export const ViewMenu = () => {
  return (
    <ViewMenuContainer>
      <ViewMenuLabel>View:</ViewMenuLabel>
      <ButtonGroup minimal={false}>
        <Button icon="calendar" active={true}>
          By Date
        </Button>
        <Button icon="layer">By Ship</Button>
        <Button icon="flame">Special</Button>
      </ButtonGroup>
    </ViewMenuContainer>
  );
};
