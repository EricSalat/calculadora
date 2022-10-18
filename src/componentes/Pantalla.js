import React from "react";
import "../hojas-de-estilo/Pantalla.css";

//Definiendo un componente con una función flecha (también se puede hacer)
const Pantalla = ({ input }) => (
   <div className="input">
    {input}
   </div> 
);

export default Pantalla;