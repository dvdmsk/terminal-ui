/**
 * Converts the date from the format "YYYYY-MM-DDTHH: MM: SS" into an array ["dd.mm.yyyy", "HH: mm: ss"].
 *
 * @param isoDateTimeString Date and time in ISO 8601 format (for example, "2025-05-27T13: 33: 26").
 * @returns An array containing a date in "dd.mm.yyyy" and time in "HH: MM: SS" format,
 * or [null, null] if the input line is invalid.
 */

export function formatDateTime(isoDateTimeString: string): [string | null, string | null] {
  const date = new Date(isoDateTimeString);

  if (isNaN(date.getTime())) {
    console.error(`Invalid date string provided: ${isoDateTimeString}`);
    return [null, null];
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return [formattedDate, formattedTime];
}

export const formatAmountDecimal = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).replace(/,/g, ' ');
};

export const formatAmountInteger = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).replace(/,/g, ' ');
};
