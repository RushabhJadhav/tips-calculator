import { useState, createContext } from "react";
import Form from "./components/Form";

const UserContext = createContext();

function App() {

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  
  return (
    <UserContext.Provider value={{bill, setBill, people, setPeople}}>
      <Form />
    </UserContext.Provider>
  );
}

export default App;
