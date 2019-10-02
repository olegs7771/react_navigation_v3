import isEmpty from "./isEmpty";

const validate = (val, rules, passwordValue) => {
  let isValid = true;
  for (let rule in rules) {
    console.log("rule", rule);
    console.log("rules[rule]", rules[rule]);

    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;

      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;

      case "equelTo":
        isValid = isValid && equelToValidator(val, passwordValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  console.log("email case");

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(val);
};

const minLengthValidator = (val, minLength) => {
  console.log("minLength case");

  return val.length >= minLength;
};
const equelToValidator = (val, password1) => {
  console.log("equelTo case");

  console.log("validation val", val);
  console.log(" validation password1 ", password1);

  return val === password1;
};

export default validate;
