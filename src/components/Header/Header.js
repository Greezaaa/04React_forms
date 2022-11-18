import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/"> Inicio </Link></li>
                    <li><Link to="/add"> Añadir </Link></li>
                    <li><Link to="/delete"> Eliminar </Link></li>
                </ul>
            </nav>



        </>
    )
}

export default Header