import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import stringSimilarity from 'string-similarity';
import CaptureRow from '../CaptureRow';
import { DAYS_PER_PAGE } from '../constants';

const CaptureContainerContainer = styled.div`
  box-sizing: border-box;
`;

const getDaysToRender = (allDays, renderedDays, scrollToDay = null) => {
  // Read last scroll position from URL
  // If none then scroll to second page
  // Return new page of items
  // Update URL

  if (isDayRendered(scrollToDay, renderedDays)) {
    console.log('YES IT IS RENDERED');
    return [...renderedDays];
  }

  return [...allDays.slice(0, 10)];
};

const isDayRendered = (givenDay, renderedDays) =>
  renderedDays && renderedDays.indexOf(givenDay) > -1;

const getScrollPosition = allDays => {
  // Always returns a date in the list of allDays, even if the day entered in the URL is not present in that list
  const match = window.location.hash.match(/day=([^&]*)/);
  const day = match && match.pop();

  // Find closest day and return it
  if (!allDays.length || allDays.indexOf(day) > -1) {
    return day;
  }

  // As we store ISO dates a string compare works fine
  const bestMatch = stringSimilarity.findBestMatch(day, allDays);
  return allDays[bestMatch.bestMatchIndex];
};

export const CaptureContainer = ({ rows, shipInfo }) => {
  const allDays = Object.keys(rows)
    .sort()
    .reverse();

  const renderedDays = getDaysToRender(allDays);
  const [scrollToDay, setScrollToDay] = useState(getScrollPosition(allDays));

  // Logic to scroll to the given day in URL
  const currentDay = useRef(null);
  useLayoutEffect(() => {
    if (scrollToDay && allDays.length) {
      if (!isDayRendered(scrollToDay, renderedDays)) {
        // Render the day
        //console.log('We need to render');
        //setDaysToRender(getVisibleDays(allDays, daysToRender, scrollToDay));
      }

      if (currentDay.current) {
        // This is only set if the element is rendered on the page

        currentDay.current.scrollIntoView();
      }
    }
    // If user types in new day scroll to it immediately
    window.addEventListener('hashchange', () => setScrollToDay(() => getScrollPosition(allDays)));

    return () => {
      window.removeEventListener('hashchange', () =>
        setScrollToDay(() => getScrollPosition(allDays))
      );
    };
  });

  return (
    <CaptureContainerContainer>
      {renderedDays.map(day => (
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
