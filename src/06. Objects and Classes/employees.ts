interface EmployeeData {
  name: string
  personalNumber: number
}

function employees(listEmployees: string[]) {
  class Employee implements EmployeeData {
    name: EmployeeData['name']
    personalNumber: EmployeeData['personalNumber']
    constructor(
      name: EmployeeData['name'],
      number: EmployeeData['personalNumber'],
    ) {
      this.name = name
      this.personalNumber = number
    }

    allListEmployees() {
      return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
    }
  }
  const personInfo: Array<Employee> = []

  for (let i = 0; i < listEmployees.length; i++) {
    const employeeName = listEmployees[i]
    const personalNumber = listEmployees[i].length
    personInfo.push(new Employee(employeeName, personalNumber))
  }

  for (const person of personInfo) {
    console.log(person.allListEmployees())
  }
}

employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
])

export {}
