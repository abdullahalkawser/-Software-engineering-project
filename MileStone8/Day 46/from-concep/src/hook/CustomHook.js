import { useState } from 'react';

const UseInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
  const onChange = (e) => {
    setValue(e.target.value);
  };

//   return [value, handleChange];
return {
    value,onChange

} 

};

export default UseInput;