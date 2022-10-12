import { createContext } from "react";

const UserContext = createContext({
  user: ["", () => {}],//definir propiedad user:
  edad:[null, () => {}],
   
});

export default UserContext;
