import { Link } from "react-router-dom";

const Butao = ({children, to}) => {
    return(
        <Link to={to}>
            <button className="bg-white">
                {children}
            </button>
        </Link>
        
    )
}
export default Butao;