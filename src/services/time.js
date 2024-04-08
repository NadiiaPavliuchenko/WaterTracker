export const addTimeZoneToTime = (isoDateString) => {
  console.log('🚀 ~ isoDateString:', isoDateString);

  const now = new Date(isoDateString);
  const timeZoneOffset = now.getTimezoneOffset();
  console.log('🚀 ~ timeZoneOffset:', timeZoneOffset);

  // Перетворюємо зміщення часового поясу з хвилин у формат 'HH:mm'
  const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
  console.log('🚀 ~ offsetHours:', offsetHours);
  const offsetMinutes = Math.abs(timeZoneOffset) % 60;
  console.log('🚀 ~ offsetMinutes:', offsetMinutes);
  // Додаємо ведучі нулі, якщо потрібно
  const offsetHoursFormatted = offsetHours.toString().padStart(2, '0');
  console.log('🚀 ~ offsetHoursFormatted:', offsetHoursFormatted);
  const offsetMinutesFormatted = offsetMinutes.toString().padStart(2, '0');
  console.log('🚀 ~ offsetMinutesFormatted:', offsetMinutesFormatted);

  // Формуємо рядок зміщення часового поясу
  const timeZoneOffsetString = `${
    timeZoneOffset >= 0 ? '-' : '+'
  }${offsetHoursFormatted}:${offsetMinutesFormatted}`;
  console.log('🚀 ~ timeZoneOffsetString:', timeZoneOffsetString);

  // Створюємо новий об'єкт дати без мілісекунд
  const dateWithoutMilliseconds = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
  console.log('🚀 ~ dateWithoutMilliseconds:', dateWithoutMilliseconds);

  // Перетворюємо дату назад у формат ISO і додаємо зміщення часового поясу
  const isoDateWithTimeZone = `${
    dateWithoutMilliseconds.toISOString().split('.')[0]
  }${timeZoneOffsetString}`;
  console.log('🚀 ~ isoDateWithTimeZone:', isoDateWithTimeZone);

  return isoDateWithTimeZone;
};
