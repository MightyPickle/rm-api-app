// import React, { useState } from 'react';
// import { submitHandler } from '../../utils/eventHandlers';

// export default function Input({ setInput }) {
//   let timeout;
//   const inputHandler = (query) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       setInput(query);
//     }, 250);
//   };

//   return (
//     <div className="input-container">
//       <form className="form" onSubmit={submitHandler}>
//         <input className="input" type="text" placeholder="Enter a name" onChange={(e) => inputHandler(e.target.value)} />
//         <button className="btn" type="submit">Search</button>
//       </form>
//     </div>
//   );
// }
