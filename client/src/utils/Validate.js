import isEmpty from "lodash/isEmpty";

export default function Validate(data){
  const errors = {};
  if (typeof data.username === "undefined" || !data.username){
    errors.username = "This field is required";
  }
  if (typeof data.password === "undefined" || !data.password){
    errors.password = "This field is required";
  }
  return {errors, valid: isEmpty(errors)};
}
