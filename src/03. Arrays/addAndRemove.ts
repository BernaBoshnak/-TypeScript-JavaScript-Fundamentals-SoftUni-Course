type Command = Array<"add" | "remove">;

function addAndRemove(arrayInput: Command) {
  const array = arrayInput;
  const newArray = [];
  let number = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      newArray.push(number);
    } else {
      newArray.pop();
    }
    number++;
  }
  if (!newArray.length) {
    console.log("Empty");
  } else {
    console.log(newArray.join(" "));
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
