import moment from 'moment';
import 'moment-timezone';

const getMMSIFromCaptureId = captureId => captureId.substring(0, 9);
const getTimestampFromCaptureId = captureId => captureId.substring(9);
export const getCapturesByDate = ({ captures }) => {
  const capturesByDate = captures.reduce((capturesByDay, capture) => {
    const mmsi = getMMSIFromCaptureId(capture);
    const timestamp = getTimestampFromCaptureId(capture);
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

export const getCaptureDetails = (capture, shipInfo) => {
  const mmsi = getMMSIFromCaptureId(capture);
  const timestamp = getTimestampFromCaptureId(capture);

  return {
    capture,
    mmsi,
    timeLabel: moment
      .unix(timestamp)
      .tz('Australia/Sydney')
      .format('LLLL z'),
    ...shipInfo[mmsi],
  };
};

export const getCapturesByShipAndDate = (mmsi, captures) => {
  const filteredCaptures = captures.filter(c => c.startsWith(mmsi));
  return getCapturesByDate({ captures: filteredCaptures });
};
