const isValidPassLength = (passwordLength: number) => {
  let isValid = false;

  if (passwordLength >= 6 && passwordLength <= 10) {
    isValid = true;
  }
  return isValid;
};

const isBetweenRange = (ch: string, start: string, end: string) => {
  return (
    ch.charCodeAt(0) >= start.charCodeAt(0) &&
    ch.charCodeAt(0) <= end.charCodeAt(0)
  );
};

const containsOnlyLettersAndDigits = (password: string) => {
  let isValid = true;

  for (const ch of password) {
    if (
      !(
        isBetweenRange(ch, "A", "Z") ||
        isBetweenRange(ch, "a", "z") ||
        isBetweenRange(ch, "0", "9")
      )
    ) {
      isValid = false;
    }
  }
  return isValid;
};

const containsLeastTwoDigits = (password: string) => {
  let digitsCounter = 0;

  for (const ch of password) {
    if (isBetweenRange(ch, "0", "9")) {
      digitsCounter++;

      if (digitsCounter === 2) {
        break;
      }
    }
  }
  return digitsCounter === 2 ? true : false;
};

const passwordValidator = (password: string) => {
  const isValidPassLengthVal = isValidPassLength(password.length);
  if (!isValidPassLengthVal) {
    console.log("Password must be between 6 and 10 characters");
  }

  const containsOnlyLettersAndDigitsVal =
    containsOnlyLettersAndDigits(password);
  if (!containsOnlyLettersAndDigitsVal) {
    console.log("Password must consist only of letters and digits");
  }
  const containsLeastTwoDigitsVal = containsLeastTwoDigits(password);
  if (!containsLeastTwoDigitsVal) {
    console.log("Password must have at least 2 digits");
  }

  if (
    isValidPassLengthVal &&
    containsOnlyLettersAndDigitsVal &&
    containsLeastTwoDigitsVal
  ) {
    console.log("Password is valid");
  }
};

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
