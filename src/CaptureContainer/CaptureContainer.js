import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import stringSimilarity from 'string-similarity';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import CaptureRow from '../CaptureRow';
import { getLocationHash } from '../utils';

import { HEADER_HEIGHT, PAGE_SIZE } from '../constants';

const SCROLL_LOAD_THRESHOLD = 400;

const CaptureContainerContainer = styled.div`
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT}px;
  background: white;
  @media screen and (max-width: 600px) {
    overflow-x: hidden;
  }
`;

const sanitizeScrollToDay = allDays => {
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
  const [scrollToDay, setScrollToDay] = useState(sanitizeScrollToDay(allDays));
  const [displayedPageIndex, setDisplayedPageIndex] = useState(PAGE_SIZE);

  useEffect(() => {
    setDisplayedPageIndex(PAGE_SIZE);
    window.scrollTo(0, 0);
  }, [rows]);

  const currentDay = useRef(null);
  useLayoutEffect(() => {
    // Logic to scroll to the given day in URL
    if (scrollToDay && currentDay.current) {
      window.scrollTo(0, currentDay.current.offsetTop - HEADER_HEIGHT);
    }

    const scrollToDayCallback = () => {
      const scrollToDay = sanitizeScrollToDay(allDays);
      setDisplayedPageIndex(allDays.indexOf(scrollToDay) + PAGE_SIZE);
      setScrollToDay(scrollToDay);
    };

    const infiniteScrollLoader = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + SCROLL_LOAD_THRESHOLD >=
        document.documentElement.offsetHeight
      ) {
        setDisplayedPageIndex(
          displayedPageIndex + PAGE_SIZE > allDays.length
            ? allDays.length
            : displayedPageIndex + PAGE_SIZE
        );
      }
    };

    // If user types in new day scroll to it immediately
    window.addEventListener('hashchange', scrollToDayCallback);

    // Implement infinite scroll
    window.addEventListener('scroll', infiniteScrollLoader);

    return () => {
      window.removeEventListener('hashchange', scrollToDayCallback);
      window.removeEventListener('scroll', infiniteScrollLoader);
    };
  });

  return (
    <CaptureContainerContainer>
      {allDays.slice(0, displayedPageIndex).map(day => (
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
