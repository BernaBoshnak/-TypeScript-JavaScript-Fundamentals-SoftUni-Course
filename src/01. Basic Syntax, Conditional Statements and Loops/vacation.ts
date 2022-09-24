type Group = "Business" | "Students" | "Regular";
type DayOfWeek = "Friday" | "Saturday" | "Sunday";
type Prices = {
  [P in Lowercase<Group>]: {
    [K in Lowercase<DayOfWeek>]: number;
  };
};

const prices: Prices = {
  students: {
    friday: 8.45,
    saturday: 9.8,
    sunday: 10.46,
  },
  business: {
    friday: 10.9,
    saturday: 15.6,
    sunday: 16,
  },
  regular: {
    friday: 15,
    saturday: 20,
    sunday: 22.5,
  },
};

function vacation(group: number, typeOfGroup: Group, dayOfWeek: DayOfWeek) {
  const lowerTypeOfGroup = typeOfGroup.toLowerCase() as Lowercase<Group>;
  const lowerDayOfWeek = typeOfGroup.toLowerCase() as Lowercase<DayOfWeek>;
  let totalPrice = group * prices[lowerTypeOfGroup][lowerDayOfWeek];

  if (typeOfGroup === "Students") {
    if (group >= 30) {
      totalPrice -= totalPrice * (15 / 100);
    }
  } else if (typeOfGroup === "Business") {
    switch (dayOfWeek) {
      case "Friday":
        if (group >= 100) {
          totalPrice = (group - 10) * 10.9;
        }
        break;
      case "Saturday":
        if (group >= 100) {
          totalPrice = (group - 10) * 15.6;
        }
        break;
      case "Sunday":
        if (group >= 100) {
          totalPrice = (group - 10) * 16;
        }
        break;
    }
  } else {
    if (group >= 10 && group <= 20) {
      totalPrice -= totalPrice * (5 / 100);
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Business", "Sunday");
vacation(40, "Regular", "Saturday");

export {};
