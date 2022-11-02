type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7
type DaysNamesArrayIndex = 0 | Exclude<Day, 7>
type WeekDaysTuple = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function dayOfWeek(day: Day) {
  const index = (day - 1) as DaysNamesArrayIndex
  const daysNames: WeekDaysTuple = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  console.log(daysNames[index])
}

dayOfWeek(3)
dayOfWeek(6)

export {}
