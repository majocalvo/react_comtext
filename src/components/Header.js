import React, {useContext} from "react";
import UserContext from "../context/UserContext";

export default function Header(){

const context =useContext(UserContext)

return (
    <div>
        <h1>Hola: {context.user[0]} </h1>
        <h1>edad: {context.edad[0]}</h1>
    </div>
);

}