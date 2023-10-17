import React, { useState } from "react";
import "./Home.css";
import AccountCard from "./AccountCard";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acc, setAcc] = useState(false);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = () => {
    setAcc(true);
  };

  return (
    <div className="block">
      {acc ? (
        <AccountCard name={name} city={city} email={email} />
      ) : (
        <RegistrationForm
          handleChanglePass={handleChangePass}
          handleChangleCity={handleChangeCity}
          handleChangleEmail={handleChangeEmail}
          handleChangleName={handleChangeName}
          onSubmitForm={onSubmitForm}
          name={name}
          city={city}
          password={password}
          email={email}
        />
      )}
    </div>
  );
};

export default Home;
