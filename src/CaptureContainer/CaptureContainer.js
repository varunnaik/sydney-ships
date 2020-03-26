import React, { useLayoutEffect, useRef, forwardRef } from 'react';
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

const getVisibleDays = (days, position = null) => {
  // Read last scroll position from URL
  // If none then scroll to second page
  // Return new page of items
  // Update URL
  return days.slice(0, 10);
};

const getScrollPosition = () => '2020-03-19';

export const CaptureContainer = ({ rows, shipInfo }) => {
  const allDays = Object.keys(rows)
    .sort()
    .reverse();

  const daysToDisplay = getVisibleDays(allDays);
  const scrollToDay = getScrollPosition();

  const currentDay = useRef(null);
  useLayoutEffect(() => {
    setTimeout(() => {
      if (scrollToDay && currentDay.current) {
        currentDay.current.scrollIntoView();
        window.scrollTo(0, currentDay.current.offsetTop);
      }
    }, 100);
  });

  return (
    <CaptureContainerContainer>
      {daysToDisplay.map(day => (
        <CaptureRow
          scrollIntoViewRef={scrollToDay === day ? currentDay : undefined}
          title={day}
          items={rows[day]}
          shipInfo={shipInfo}
          key={`capture-row-${day}`}
        />
      ))}
    </CaptureContainerContainer>
  );
};
