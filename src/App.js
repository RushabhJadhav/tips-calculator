import { useState, createContext } from "react";
import Form from "./components/Form";

export const UserContext = createContext();

function App() {

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [total, setTotal] = useState(0)
  
  return (
    <UserContext.Provider value={{bill, setBill, people, setPeople, tip, setTip, total, setTotal, totalTip, setTotalTip}}>
      <Form />
    </UserContext.Provider>
  );
}

export default App;
