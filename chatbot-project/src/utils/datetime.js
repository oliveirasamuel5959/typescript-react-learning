import dayjs from 'dayjs';

export function getCurrentDate() {
  const now = dayjs();
  const formattedDate = now.format('DD/MM/YYYY HH:mm:ss'); // Format the date

  return formattedDate;
}