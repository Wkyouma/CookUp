const Form = ({onSubmit}) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nome= event.target[0].value
        const email=event.target[1].value
        onSubmit({nome,email})}
    return(
        <form onSubmit={safeSubmit}>
            <input type="text" placeholder="insira seu nome"></input>
            <input type="text" placeholder="insira seu email"></input>
            <button type="submit">Seguir</button>
        </form>
    )
}
export default Form