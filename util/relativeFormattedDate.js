export const commentsTime = (previous, current = new Date()) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  previous * 1000;

  let elapsed = current - previous;
  if (elapsed < msPerMinute) {
    return 'Just now';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + 'm';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + 'h';
  } else if (elapsed < 3 * msPerDay) {
    return Math.round(elapsed / msPerDay) + 'd';
  } else {
    return previous.toDateString();
  }
};
