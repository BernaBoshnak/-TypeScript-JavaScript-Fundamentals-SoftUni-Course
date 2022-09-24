function concatenateNames(
  firstName: string,
  secondName: string,
  delimeter: string
) {
  console.log(`${firstName}${delimeter}${secondName}`);
}

concatenateNames("John", "Smith", "->");
concatenateNames("Jan", "White", "<->");
concatenateNames("Linda", "Terry", "=>");

export {};
