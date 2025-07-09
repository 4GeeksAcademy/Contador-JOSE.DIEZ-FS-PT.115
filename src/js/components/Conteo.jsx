

//Hago otro movimiento de props que es INNECESARIO.

export const Conteo = (props) => {
   
    return (
		<div className="padre">
			<div className="digito4" >{props.digito4}</div>
			<div className="digito3" >{props.digito3}</div>
			<div className="digito2" >{props.digito2}</div>
			<div className="digito" >{props.digito1}</div>
		</div>
	);
};
