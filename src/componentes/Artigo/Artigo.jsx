import data from '../../../artigos.json';
const ArtigosLista = () => {
    return(
        <div className='text-black dark:text-white'>
        {data.map((props, index) => (
            <div key={index}>
            <h1>{props.title}</h1>
            <a className='bg-gradient-to-r from-laranja-claro to-laranja-escuro rounded-e '>{props.tags}</a>
            </div>
        ))}
    </div>
    )
}
export default ArtigosLista