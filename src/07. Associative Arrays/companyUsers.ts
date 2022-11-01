type CompanyName = string;
type EmployeeId = string[];
type Companies = Record<CompanyName, EmployeeId>;

function companyUsers(array: Array<string>) {
  const companyList = (array: Array<string>) => {
    const companies: Companies = {};

    array.forEach((line) => {
      const [companyName, id] = line.split(" -> ");

      if (!Object.prototype.hasOwnProperty.call(companies, companyName)) {
        companies[companyName] = [];
      }

      companies[companyName].push(id);
    });

    return companies;
  };

  const companyInfo = companyList(array);
  const sortedCompanies = Object.entries(companyInfo);
  sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));

  for (const element of sortedCompanies) {
    console.log(`${element[0]}`);

    for (const number of element[1]) {
      console.log(`-- ${number}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

export {};
