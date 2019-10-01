import isEmpty from "./isEmpty";

const validate = (val, rules) => {
  let isValid = true;
  for (let rule in rules) {
    console.log("rule", rule);
    console.log("rules[rule]", rules[rule]);

    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
      case "equelTo":
        isValid = isvalid && equelToValidator(val, rules[rule]);
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(val);
};
const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
};
const equelToValidator = (val, password1) => {
  return val === password1;
};

export default validate;
