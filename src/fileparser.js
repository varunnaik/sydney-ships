import moment from 'moment';
import 'moment-timezone';
export const getCapturesByDate = ({ captures }) => {
  const capturesByDate = captures.reduce((capturesByDay, capture) => {
    const mmsi = capture.substring(0, 9);
    const timestamp = capture.substring(9);
    const captureDate = moment.unix(timestamp);
    const byDay = captureDate.tz('Australia/Sydney').format('YYYY-MM-DD');
    const dateLabel = captureDate.tz('Australia/Sydney').format('ll');
    const time = captureDate.tz('Australia/Sydney').format('hh:mm:ss a');
    return {
      ...capturesByDay,
      [byDay]: [
        ...(capturesByDay[byDay] || []),
        {
          dateLabel,
          time,
          mmsi,
          capture,
          captureDate,
        },
      ],
    };
  }, {});

  return capturesByDate;
};
