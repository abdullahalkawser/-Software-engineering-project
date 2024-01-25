import React from 'react';
import UseInput from '../../hook/CustomHook'; // Ensure the correct path to your custom hook

const HooksFrom = () => {
//   const [name, changeHandler] = UseInput('');
//   const [email, emailChangeHandler] = UseInput('');
//   const [password, passwordChangeHandler] = UseInput('');

const names = UseInput()
const emails = UseInput()
const passwords = UseInput()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(names.value, emails.value, passwords.value);

     // 'name' directly holds the input value from the custom hook
  };

  return (
    <div>
   <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={changeHandler} type="text" name="text" /> <br /> */}
        {/* <input value={email} onChange={emailChangeHandler} type="email" name="email" /> <br />
        input value={password} onChange={passwordChangeHandler} type="password" name="password" /> <br /> */}

        <input {...names} type="text" name="text" /> <br />
        <input {...emails} type="email" name="email" /> <br />
        <input {...passwords} type="password" name="password" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HooksFrom;