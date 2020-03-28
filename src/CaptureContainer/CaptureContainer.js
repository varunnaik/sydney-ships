import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import stringSimilarity from 'string-similarity';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import CaptureRow from '../CaptureRow';
import { getLocationHash } from '../utils';

import { HEADER_HEIGHT } from '../constants';

const CaptureContainerContainer = styled.div`
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT}px;
  @media screen and (max-width: 600px) {
    overflow-x: hidden;
  }
`;

const getScrollPosition = allDays => {
  // Always returns a date in the list of allDays, even if the day entered in the URL is not present in that list

  const day = getLocationHash('day');

  if (!day) return null;

  // Find closest day and return it
  if (!allDays.length || allDays.indexOf(day) > -1) {
    return day;
  }

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
    if (scrollToDay && currentDay.current) {
      window.scrollTo(0, currentDay.current.offsetTop - HEADER_HEIGHT);
    }

    const scrollToDayCallback = () => {
      setScrollToDay(() => getScrollPosition(allDays));
    };

    // If user types in new day scroll to it immediately
    window.addEventListener('hashchange', scrollToDayCallback);

    return () => {
      window.removeEventListener('hashchange', scrollToDayCallback);
    };
  });

  return (
    <CaptureContainerContainer>
      {allDays.map(day => (
        <CaptureRow
          scrollIntoViewRef={scrollToDay === day ? currentDay : undefined}
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
