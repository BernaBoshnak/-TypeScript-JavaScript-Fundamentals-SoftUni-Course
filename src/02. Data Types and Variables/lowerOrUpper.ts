type LowerLetter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type UpperLetter = Uppercase<LowerLetter>;

function lowerOrUpper(letter: LowerLetter | UpperLetter) {
  letter === letter.toUpperCase()
    ? console.log("upper-case")
    : console.log("lower-case");
}

lowerOrUpper("L");
lowerOrUpper("f");
