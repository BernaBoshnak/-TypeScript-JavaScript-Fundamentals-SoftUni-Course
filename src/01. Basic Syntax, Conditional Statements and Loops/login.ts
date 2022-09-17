type LoginInput =
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string];

function login(input: LoginInput) {
  const username = input.shift();
  const password = username?.split("").reverse().join("");

  let failsCounter = 0;
  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (current !== password) {
      failsCounter++;
      if (failsCounter > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    } else {
      console.log(`User ${username} logged in.`);
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
