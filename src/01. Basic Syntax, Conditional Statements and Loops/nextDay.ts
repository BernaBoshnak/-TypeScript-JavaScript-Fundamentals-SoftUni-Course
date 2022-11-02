type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Days29 =
  | Month
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
type Days30 = Days29 | 30
type Days31 = Days30 | 31
type MonthDays<M extends Month> = M extends 1
  ? Days31
  : M extends 2
  ? Days29
  : M extends 3
  ? Days31
  : M extends 4
  ? Days30
  : M extends 5
  ? Days31
  : M extends 6
  ? Days30
  : M extends 7
  ? Days31
  : M extends 8
  ? Days31
  : M extends 9
  ? Days30
  : M extends 10
  ? Days31
  : M extends 11
  ? Days30
  : M extends 12
  ? Days31
  : never

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
const isFebruary = (month: Month) => month === 2

function nextDay<M extends Month, D extends MonthDays<M>>(
  year: number,
  month: M,
  day: D,
): never | void {
  if (isFebruary(month) && !isLeapYear(year) && day === 29) {
    throw new Error('Invalid date')
  }

  const nextDay = new Date(year, month - 1, day + 1)
  const newYear = nextDay.getFullYear()
  const newmonth = nextDay.getMonth() + 1
  const newDate = nextDay.getDate()
  console.log(`${newYear}-${newmonth}-${newDate}`)
}

nextDay(2016, 9, 30)
nextDay(2022, 1, 17)
nextDay(2015, 2, 29)
nextDay(2020, 2, 29)

export {}
