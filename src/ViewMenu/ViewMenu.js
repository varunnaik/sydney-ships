import React from 'react';
import styled from 'styled-components';
import { Navbar, ButtonGroup, Button, Menu, Popover, OverflowList } from '@blueprintjs/core';

const ViewMenuContainer = styled(OverflowList)`
  display: flex;
  align-items: center;
`;

const getItems = () => [
  <span>View: &nbsp;</span>,
  <ButtonGroup minimal={false}>
    <Button icon="layer">Full</Button>
    <Button icon="flame">Compact</Button>
    <Button>List</Button>
  </ButtonGroup>,
  <Navbar.Divider />,
  <span>Captures By:&nbsp;</span>,
  <ButtonGroup minimal={false}>
    <Button icon="calendar" active={true}>
      Date
    </Button>
    <Button icon="layer">Ship</Button>
    <Button icon="flame">Special</Button>
  </ButtonGroup>,
];

export const ViewMenu = () => {
  return (
    <ViewMenuContainer
      items={getItems()}
      visibleItemRenderer={(i, ind) => i}
      overflowRenderer={() => <h2>Render</h2>}
    />
  );
};
