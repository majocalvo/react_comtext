import { useContext, useRef } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const context = useContext(UserContext);
  const { user } = context;
  const [name, setName] = user;
  const { edad } = context;
  const [age, setAge] = edad;

  const refNombre = useRef();
  const refEdad = useRef();

  const cambiarNombre = function () {
    console.log("cambiar nombre a:");
    if (refNombre.current.value != "") {
      return setName(refNombre.current.value);
    } else {
      return setName("Juanito");
    }
  };

  const cambiarEdad = function () {
    console.log(refEdad.current.value);
    return setAge(Number(refEdad.current.value));
  };

  return (
    <div>
      <h1>Hola: {name} aquí está tu perfil</h1>
      <h1>Tu edad es {age} años </h1>
      <input
        ref={refNombre}
        type="text"
        placeholder="si no eres juanito ingresa tu nombre"
      ></input>
      {/* <button onClick={() => setName("Juan")}>Cambiar nombre</button> //original */}
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      <button onClick={cambiarEdad}>Ingresa tu edad</button>
      <input ref={refEdad} type="number" placeholder="Ingresar edad"></input>
    </div>
  );
}
