import { useState } from "react";
import "./App.css";
import TodoListClass from "./TodoListClass";

function App() {
  return (
    <div className="App">
      
      <TodoListClass/>
    </div>
  );
}

// <CommonInputClass />
// <CommonCounterClass/>
// <CommonInputClass inputName="firstName" />
// <CommonInputClass inputName="lastName" />
// <CommonInputClass inputName="email" />
// <CommonInputClass inputName="phoneNum" />
// function App() {
//   const [firstName, setFirstName] = useState("");
//   return (
//     <div className="App">
//       <form className="form-box">
//         <CommonInput
//           placeholder="Enter Value"
//           type="text"
//           value={firstName}
//           onChange={handleChange}
//           label="First Name: "
//         />
//         <CommonInput
//           placeholder="Enter Value"
//           type="text"
//           value="Raza"
//           onChange="handleChange"
//           label="Last Name:"
//         />
//         <CommonInput
//           placeholder="Enter Value"
//           type="text"
//           value="jari.raza@softvira.com"
//           onChange="handleChange"
//           label="Email:"
//         />
//         <CommonInput
//           placeholder="Enter Value"
//           type="text"
//           value="02136547895"
//           onChange="handleChange"
//           label="Number:"
//         />
//         <button onClick={onSubmit}> Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
