import isEmpty from "./isEmpty";

const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;

      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;

      case "equelTo":
        isValid = isValid && equelToValidator(val, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(val.trim());
};

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
};
const equelToValidator = (val, password) => {
  return val === password;
};

export default validate;
