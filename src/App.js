import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [age , setAge] = useState(30);
  const userData = {
    user: [user, setUser],
    edad: [age , setAge],
  }

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
