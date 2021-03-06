import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Button from '@atlaskit/button';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import Select from '@atlaskit/select';
import { setLocationHash, getLocationHash, clearHash } from '../utils';
import { HEADER_HEIGHT } from '../constants';
import AboutDialog from '../AboutDialog';
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

  @media screen and (max-width: 600px) {
    max-width: 100px;
  }
`;

const DatePickerButtonBox = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 10px;

  padding-left: 10px;
  height: 20px;
  margin-right: 5px;

  @media screen and (max-width: 600px) {
    margin: 0 5px 0 5px;
    padding-left: 0px;
    max-width: 100px;

    button {
      padding-left: 0 !important;
    }
  }
`;

const DatePickerControl = styled(Button)`
  margin-top: -6px;
`;

const DatePickerPrompt = styled.span`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ShipSelect = styled(Select)`
  text-transform: capitalize;
  min-width: 190px;
  margin: 0 5px 0 0;

  @media screen and (max-width: 600px) {
    min-width: 120px;
  }

  // Hacks around react-select not allowing its height to be set
  .react-select__placeholder {
    color: rgb(66, 82, 110) !important;
    top: 47%;
  }

  .react-select__indicators,
  .react-select__indicator {
    padding-right: 0; // Allow about button to fit in header on mobile
    padding-left: 0;
  }

  .react-select__value-container {
    padding-right: 0;
  }

  .react-select__dropdown-indicator {
    padding-top: 4px !important;
  }
  .react-select__control {
    max-height: 36px;
    min-height: 36px;
  }
  * > * {
    text-transform: capitalize;
    max-height: 36px;
  }
`;

const AboutButton = styled(Button)``;

export const Header = ({ dates, highlights, shipInfo, onShipSelect }) => {
  const currentDate = getLocationHash('day');
  const [selectedDate, setSelectedDate] = useState(
    currentDate ? new Date(currentDate) : new Date()
  );

  const [selectValue, setSelectValue] = useState();
  const [selectEntries, setSelectEntries] = useState();
  const [aboutDialogVisible, setAboutDialogVisible] = useState(false);

  useEffect(() => {
    const selectEntries = Object.entries(shipInfo)
      .map(([mmsi, { name }]) => ({
        label: name.toLowerCase(),
        value: mmsi,
      }))
      .filter(entry => entry.label !== '')
      .sort((a, b) => a.label > b.label);

    selectEntries.splice(0, 0, { label: 'All', value: '' });
    setSelectEntries(selectEntries);

    const currentFilterCode = getLocationHash('filter');
    if (currentFilterCode) {
      const selectValue = selectEntries.find(e => e.value === currentFilterCode);
      if (selectValue) {
        onShipSelect(selectValue);
      }
      setSelectValue(selectValue);
    }
  }, [shipInfo, onShipSelect]);

  return (
    <>
      <HeaderContainer>
        <Heading>Sydney Ships</Heading>
        <DatePicker
          includeDates={dates.map(d => new Date(d))}
          customInput={
            <DatePickerButtonBox>
              <DatePickerControl iconAfter={<CalendarIcon />}>
                <DatePickerPrompt>Go To Date</DatePickerPrompt>
              </DatePickerControl>
            </DatePickerButtonBox>
          }
          onChange={date => {
            const dateObj = moment(date);
            setLocationHash('day', dateObj.format('YYYY-MM-DD'));
            setSelectedDate(dateObj.toDate());
          }}
          selected={selectedDate}
        />
        <ShipSelect
          className="single-select"
          classNamePrefix="react-select"
          placeholder="View Ship"
          options={selectEntries}
          onChange={selectedItem => {
            selectedItem.value
              ? setLocationHash('filter', selectedItem.value)
              : clearHash('filter');
            setSelectValue(selectedItem);
            onShipSelect(selectedItem);
          }}
          value={selectValue}
        />
        <AboutButton onClick={() => setAboutDialogVisible(true)}>About</AboutButton>
        {aboutDialogVisible && (
          <AboutDialog onClose={() => setAboutDialogVisible(false)}></AboutDialog>
        )}
      </HeaderContainer>
    </>
  );
};
