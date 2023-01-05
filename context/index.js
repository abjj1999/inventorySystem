import { useState, createContext, useEffect } from "react";


//execute the createContext function
const UserContext = createContext();

//use .Porivder to pass the values globally
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
  });
  
  //useEffect

 

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };