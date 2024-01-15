import axios from "axios"

import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";



function App() {
  axios.defaults.baseURL ='http://localhost:5000';
  axios.defaults.withCredentials = true;

  return (
    
      <div> 
     
     <UserContextProvider>
     <Routes></Routes>
     </UserContextProvider>
    
      </div>
    
     
   
  )
}

export default App
