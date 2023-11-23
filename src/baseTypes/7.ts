/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday = 'Monday',
  Tuesday = ' Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thurday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

function isWeekend(days: Days): boolean {
  return days === Days.Saturday || days === Days.Sunday;
}
