# TypeScript version of JavaScript Fundamentals - SoftUni Course

### :scroll: Description

The course examines fundamental concepts in programming, which are the basis for effective and quality training in the professional modules.

The basics of web development such as HTML and CSS, HTTP, bitwise operations, and more are covered.

This course is based on the `JavaScript Fundamentals` course from SoftUni and is designed for learning a deeper knowledge of the JavaScript language but converted to TypeScript, adding types and structures for better stability and predictability.

<hr>

### :bookmark_tabs: Subjects included in the course

- Basic Syntax, Conditional Statements and Loops
- Data Types and Variables
- Basic HTML
- Arrays
- Basic CSS
- Functions
- HTTP Basics
- Arrays Advanced
- Objects and Classes
- Bitwise Operations
- Associative Arrays
- Text Processing
- Database Basics
- Regular Expressions
- Git and GitHub

<hr>

### :woman_juggling: Scripts

You need to have [NodeJS](https://nodejs.org/en/) installed to run the scripts. To install the dependencies, run `npm install` first.

#### `npm run build`

Compiles the TypeScript files to JavaScript.

#### `npm run format`

Automatically formats files using prettier with the `--write` flag.

#### `npm run check-format`

Validates code formatting using prettier. Won't change any files. Prints out a list of files with bad formatting.

#### `npm run ts-lint`

Validates all TypeScript files in the current directory and its subdirectories using the ESLint linting tool.

#### `npm run ts-validate`

Performs type-checking on the TypeScript files. In combination with the `--noEmit` option the compiler will not generate JavaScript files.

#### `npm run validate`

The `validate` script runs the `npm-run-all` package with the `--parallel` flag to run the specified scripts in parallel, meaning that they will all be run at the same time and it will result in less validation processing time. The scripts being run in parallel are `check-format`, `ts-lint`, and `ts-validate`.

<hr>

## :briefcase: Technologies used

[![Technologies](https://skills.thijs.gg/icons?i=ts,js)](https://skills.thijs.gg)
