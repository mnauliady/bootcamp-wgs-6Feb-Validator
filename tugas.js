// import validator from "validator";
var validator = require("validator");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Name: ", (name) => {
  readline.question("Telephone: ", (telephone) => {
    if (!validator.isMobilePhone(telephone["id - ID"])) {
      console.log("Format telephone tidak sesuai");
    } else {
      readline.question("Email: ", (email) => {
        if (validator.isMobilePhone(telephone, ["id-ID"]) && validator.isEmail(email)) {
          console.log(`Hello, ${name}, your telephone number is ${telephone} and your email is ${email}`);
        }
        if (!validator.isMobilePhone(telephone["id - ID"])) {
          console.log("Format telephone tidak sesuai");
        }
        if (!validator.isEmail(email)) {
          console.log("Format email tidak sesuai");
        }
      });
    }
    readline.close();
  });
});
