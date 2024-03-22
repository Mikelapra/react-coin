import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import Header from './Header.jsx'

function Favorites (){
    const [listado, setListado] = useState(JSON.parse(localStorage.getItem('favoritos')))
    return(
        <>
        <h1>Favoritos</h1>
        <Header />
        
        <ul>
        {(listado == null) ? <p>No hay favoritos </p> : listado.map((coin)=>(<li key={coin}><Link to={`/coin/${coin}`}>{coin}</Link> </li> ))}
        
        </ul>
        </>
    )
}

export default Favorites