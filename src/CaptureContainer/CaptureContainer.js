import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import stringSimilarity from 'string-similarity';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import CaptureRow from '../CaptureRow';

const CaptureContainerContainer = styled.div`
  box-sizing: border-box;
`;

const getScrollPosition = allDays => {
  // Always returns a date in the list of allDays, even if the day entered in the URL is not present in that list
  const match = window.location.hash.match(/day=([^&]*)/);
  const day = match && match.pop();

  if (!day) return null;

  // Find closest day and return it
  if (!allDays.length || allDays.indexOf(day) > -1) {
    return day;
  }
  console.log(day, allDays);
  // As we store ISO dates a string compare works fine
  const bestMatch = stringSimilarity.findBestMatch(day, allDays);
  return allDays[bestMatch.bestMatchIndex];
};

export const CaptureContainer = trackWindowScroll(({ rows, shipInfo, scrollPosition }) => {
  const allDays = Object.keys(rows)
    .sort()
    .reverse();

  const [scrollToDay, setScrollToDay] = useState(getScrollPosition(allDays));

  // Logic to scroll to the given day in URL
  const currentDay = useRef(null);
  useLayoutEffect(() => {
    console.log('FIRE');
    if (scrollToDay && currentDay.current) {
      currentDay.current.scrollIntoView();
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
      {allDays.map(day => (
        <CaptureRow
          scrollIntoViewRef={scrollToDay === day ? currentDay : undefined} // React does not like functional components using ref, so we have to call it something else here
          title={day}
          scrollPosition={scrollPosition}
          items={rows[day]}
          shipInfo={shipInfo}
          key={`capture-row-${day}`}
        />
      ))}
    </CaptureContainerContainer>
  );
});
