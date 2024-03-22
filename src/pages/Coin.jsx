import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import Header  from "./Header";

function Coin(){
    const [coin, setCoin] = useState({});
    const {id} =useParams();

    const findCoin = async () =>{
        try {
            const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`)
            setCoin(response.data.data);

        }catch (error){
            console.error('Error en la solicitud', error)
        }
    }



    useEffect (() => {
        findCoin()
    }, [])

    const favorito = () => {
        const favoritos= JSON.parse(localStorage.getItem('favoritos')) || [];
        favoritos.push(coin.id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }

    return(
        <>
        <h1>{coin.name}</h1>
        <Header />
        <div>
        <p>Símbolo: {coin.symbol}</p>
        <p>Rank: {coin.rank}</p>
        <p>price: {coin.priceUsd}</p>

        </div>
        <button onClick={favorito}>Añadir Favorito</button>
        
        </>
    )
}

export default Coin