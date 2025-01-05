import ReceitaCard from '../ReceitaCard'

const ArtigosLista = ({ receitas }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {receitas.map((recipe, index) => (
                <ReceitaCard 
                    key={index}
                    id={recipe.id}
                    title={recipe.title}
                    tags={recipe.tags}
                    text={recipe.text}
                />
            ))}
        </div>
    )
}

export default ArtigosLista