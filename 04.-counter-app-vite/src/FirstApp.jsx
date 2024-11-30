import PropTypes from 'prop-types';

const newMensaje ={
    persona: 'Angel',
    edad: 26
};

const mensaje = () => {
    return 'Angel'
}


export const FirstApp = ({title}) => {
    console.log(title)
    return (
        <>
            <h1>{title}</h1>
            {/* <code> {JSON.stringify(newMensaje)} </code> */}
            <p>Hola</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}