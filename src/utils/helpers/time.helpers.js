// 59:59 format
const fmtMSS = (s) => (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;

// {} hours {} min format
function formatSeconds(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return hours > 0 ? `${hours} hours ${minutes} min` : `${minutes} min`;
}

const dateFormatting = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export { fmtMSS, dateFormatting, formatSeconds };
