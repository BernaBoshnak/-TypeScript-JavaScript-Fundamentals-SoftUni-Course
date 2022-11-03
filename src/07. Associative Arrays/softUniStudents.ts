type CourseName = string
type StudentData = {
  userName: string
  creditCount: number
  email: string
  courseName: CourseName
}
type CourseData = {
  capacity: number
  students: StudentData[]
}
type Register = Record<CourseName, CourseData>

function softUniStudents(array: Array<string>) {
  const register: Register = {}

  array.forEach((line) => {
    if (line.includes(':')) {
      const [courseName, capacity] = line.split(': ')
      const courseData: CourseData = {
        capacity: Number(capacity),
        students: [],
      }

      if (!Object.prototype.hasOwnProperty.call(register, courseName)) {
        register[courseName] = courseData
      } else {
        register[courseName].capacity += courseData.capacity
      }
    } else if (line.includes('with email')) {
      const [user, , , email, , courseName] = line.split(' ')
      const [userName, credit] = user.split('[')
      const creditCount = Number(credit.replace(']', ''))

      if (Object.prototype.hasOwnProperty.call(register, courseName)) {
        const course = register[courseName]

        if (course.capacity > course.students.length) {
          course.students.push({
            userName,
            creditCount,
            email,
            courseName: courseName,
          })
        }
      }
    }
  })

  // sort courses
  const sorted = Object.entries(register).sort(
    ([, courseDataA], [, courseDataB]) =>
      Object.keys(courseDataB.students).length -
      Object.keys(courseDataA.students).length,
  )

  for (const [courseName, courseData] of sorted) {
    console.log(
      `${courseName}: ${
        courseData.capacity - courseData.students.length
      } places left`,
    )

    // sort students per course
    courseData.students
      .sort((a, b) => b.creditCount - a.creditCount)
      .forEach((k) =>
        console.log(`--- ${k.creditCount}: ${k.userName}, ${k.email}`),
      )
  }
}

softUniStudents([
  'JavaBasics: 2',
  'user1[25] with email user1@user.com joins C#Basics',
  'C#Advanced: 3',
  'JSCore: 4',
  'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore',
  'user1[25] with email user1@user.com joins JSCore',
  'user8[18] with email user8@user.com joins C#Advanced',
  'user6[85] with email user6@user.com joins JSCore',
  'JSCore: 2',
  'user11[3] with email user11@user.com joins JavaBasics',
  'user45[105] with email user45@user.com joins JSCore',
  'user007[20] with email user007@user.com joins JSCore',
  'user700[29] with email user700@user.com joins JSCore',
  'user900[88] with email user900@user.com joins JSCore',
])

export {}
