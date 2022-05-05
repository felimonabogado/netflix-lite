import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

// import { Authentication } from './controller/authentication';
// import { Dashboard } from './views/pages/dashboard';

import { PageRouter } from './controller/router';

// function App() {
//   const [islogin, setIslogin] = useState(sessionStorage.getItem("is_login"));

//   return (
//       <>
//         {(islogin) ?  <Dashboard/> : <Authentication/>}
//       </>
//   );
// }

function App(){
  return(
    <>
      <PageRouter/>
    </>
  )
}

export default App;
