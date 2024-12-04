import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    const [contador,setContador] = useState(value);

    const aumentar = (event) => {
        setContador(contador+1);
    };

    const restar = (event) => {
        setContador(contador-1);
    };

    const reset = (event) => {
        setContador(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{contador}</h2>
            <button onClick={event => restar(event)}>
                -1
            </button>
            <button onClick={event => aumentar(event)}>
                +1
            </button>
            <button onClick={event => reset(event)}>
                Reset
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
