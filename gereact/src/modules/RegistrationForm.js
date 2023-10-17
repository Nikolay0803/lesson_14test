import React from "react";
import "./Home.css";

const RegistrationForm = ({
  name,
  city,
  password,
  email,
  handleChanglePass,
  handleChangleCity,
  handleChangleEmail,
  handleChangleName,
  onSubmitForm,
}) => {
  const checkPass = (pass) => {
    return pass.length > 0;
    // const beginWithoutDigit = /^\D.*$/;
    // const withoutSpecialChars = /^[^-() /]*$/;
    // const containsLetters = /^.[a-zA-Z]+.*$/;
    // return (
    //   beginWithoutDigit.test(pass) &&
    //   withoutSpecialChars.test(pass) &&
    //   containsLetters.test(pass)
    // );
  };
  const checkEmail = (email) => {
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailValidation.test(email);
  };
  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div className="block">
      <p>Registration Form</p>
      <form>
        <div className="formInput">
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => handleChangleName(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>City</label>
          <input
            value={city}
            onChange={(event) => handleChangleCity(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => handleChangleEmail(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => handleChanglePass(event)}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
};

export default RegistrationForm;
