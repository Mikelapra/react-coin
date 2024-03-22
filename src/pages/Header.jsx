import {Link} from 'react-router-dom'
function Header(){

    return(
        <>
        <nav>
            <Link to="/">Home</Link> - <Link to="/favorites">Favoritos</Link>

        </nav>
        </>

    )
}
export default Header