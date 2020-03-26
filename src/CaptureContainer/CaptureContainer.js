import React, { useLayoutEffect, useRef, useState } from 'react';
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

const getScrollPosition = () => {
  const day = window.location.hash.match(/day=([^&]*)/);
  return day && day.pop();
};

export const CaptureContainer = ({ rows, shipInfo }) => {
  const allDays = Object.keys(rows)
    .sort()
    .reverse();

  const daysToDisplay = getVisibleDays(allDays);
  const [scrollToDay, setScrollToDay] = useState(getScrollPosition());

  const currentDay = useRef(null);
  useLayoutEffect(() => {
    if (scrollToDay && currentDay.current) {
      currentDay.current.scrollIntoView();
      window.scrollTo(0, currentDay.current.offsetTop);
      // If user types in new day scroll to it immediately
      window.addEventListener('hashchange', () => setScrollToDay(getScrollPosition));

      return () => {
        window.removeEventListener('hashchange', () => setScrollToDay(getScrollPosition));
      };
    }
  });

  return (
    <CaptureContainerContainer>
      {daysToDisplay.map(day => (
        <CaptureRow
          scrollIntoViewRef={scrollToDay === day ? currentDay : undefined} // React does not like functional components using ref, so we have to call it something else here
          title={day}
          items={rows[day]}
          shipInfo={shipInfo}
          key={`capture-row-${day}`}
        />
      ))}
    </CaptureContainerContainer>
  );
};
