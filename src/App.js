// import "./styles.css";
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     console.log("warning triggered");
//   }, [name]);
//   return (
//     <div className="App">
//       <h2>{name}</h2>
//       <h3>{email}</h3>
//       <button onClick={() => setName("Archit Dadwal")}>Name</button>
//       <button onClick={() => setEmail("dadwal@testingmail.com")}>Email</button>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
function app() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("danger");
  });
  return (
    <div>
      {" "}
      <h1> hey the data is here</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Dadwal")}>Name</button>
    </div>
  );
}
export default app;
