import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Conteo } from "./Conteo";

//create your first component


function Home(props) {
  return (
    <div>
      <h1>Contador: {props.counter}</h1>
      <Conteo 
        digito1={props.digito1}
        digito2={props.digito2}
        digito3={props.digito3}
        digito4={props.digito4}
      />
    </div>
  );
}

export default Home;