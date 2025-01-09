import Butao from "../Butao";
import Input from "../Input";

const Form = ({ onSubmit }) => {
    const safeSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const nome = event.target[0].value;
        const email = event.target[1].value;
        if (!nome || !email) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }
        onSubmit({ nome, email });
    }

    return (
        <div className="w-full max-w-md p-8 bg-white dark:bg-noturno-card rounded-2xl shadow-xl mt-20 mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Bem-vindo ao CookUp!
            </h2>
            
            <form onSubmit={safeSubmit} className="flex flex-col gap-6">
                <div>
                    <Input type="text" placeholder="Insira seu nome" />
                </div>
                
                <div>
                    <Input type="email" placeholder="Insira seu email" />
                </div>
                
                <div className="mt-4">
                    <Butao type="submit">Começar a Cozinhar</Butao>
                </div>
            </form>
        </div>
    )
}

export default Form;