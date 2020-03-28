import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Button from '@atlaskit/button';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { setLocationHash } from '../utils';
import { HEADER_HEIGHT } from '../constants';
import 'react-datepicker/dist/react-datepicker.css';

const HeaderContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),
    0 1px 1px rgba(16, 22, 26, 0.2);
  width: 100%;
  padding: 0 8px;
  height: ${HEADER_HEIGHT}px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 490; /* Keep it below the Atlassian Modal dialog */
`;
const Heading = styled.h1`
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  margin: 0;
  line-height: 1;
`;

const DatePickerButtonBox = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 10px;

  padding-left: 10px;
  height: 20px;
`;

const DatePickerControl = styled(Button)`
  margin-top: -5px;
`;

export const Header = ({ dates }) => {
  return (
    <HeaderContainer>
      <Heading>Sydney Ships</Heading>
      <DatePicker
        includeDates={dates.map(d => new Date(d))}
        customInput={
          <DatePickerButtonBox>
            <DatePickerControl iconAfter={<CalendarIcon />}>Go To Date</DatePickerControl>
          </DatePickerButtonBox>
        }
        onChange={date => setLocationHash('day', moment(date).format('YYYY-MM-DD'))}
      />
    </HeaderContainer>
  );
};