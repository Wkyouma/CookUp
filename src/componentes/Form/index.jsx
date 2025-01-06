
import Butao from "../Butao";
import Input from "../Input"
const Form = ({onSubmit}) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nome= event.target[0].value
        const email=event.target[1].value
        if (!nome || !email) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }
        onSubmit({nome,email})}
        
    
    return(
        <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-16  ">
            
            <Input required type="text" placeholder="insira seu email"/>
            <Input type="text" placeholder="insira seu nome" />
            <Butao type="submit">Seguir</Butao>
       
        </form>
    )
}
export default Form