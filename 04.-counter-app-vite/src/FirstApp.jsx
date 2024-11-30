
const newMensaje ={
    persona: 'Angel',
    edad: 26
};

const mensaje = () => {
    return 'Angel'
}


export const FirstApp = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.title}</h1>
            {/* <code> {JSON.stringify(newMensaje)} </code> */}
            <p>Hola</p>
        </>
    );
}