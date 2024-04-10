export const addTimeZoneToTime = (isoDateString) => {
  const now = new Date(isoDateString);
  const timeZoneOffset = now.getTimezoneOffset();

  // Перетворюємо зміщення часового поясу з хвилин у формат 'HH:mm'
  const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
  const offsetMinutes = Math.abs(timeZoneOffset) % 60;
  // Додаємо ведучі нулі, якщо потрібно
  const offsetHoursFormatted = offsetHours.toString().padStart(2, '0');
  const offsetMinutesFormatted = offsetMinutes.toString().padStart(2, '0');

  // Формуємо рядок зміщення часового поясу
  const timeZoneOffsetString = `${
    timeZoneOffset >= 0 ? '-' : '+'
  }${offsetHoursFormatted}:${offsetMinutesFormatted}`;

  // Створюємо новий об'єкт дати без мілісекунд
  const dateWithoutMilliseconds = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );

  // Перетворюємо дату назад у формат ISO і додаємо зміщення часового поясу
  const isoDateWithTimeZone = `${
    dateWithoutMilliseconds.toISOString().split('.')[0]
  }${timeZoneOffsetString}`;

  return isoDateWithTimeZone;
};

export const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
