import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Header  from "./Header";

function Home() {
    const [crypto, setCrypto] = useState([]);

    const findCrypto = async () =>{
        try {
            const response = await axios.get("https://api.coincap.io/v2/assets/")
            setCrypto(response.data.data);

        }catch (error){
            console.error('Error en la solicitud', error)
        }
    }


    useEffect (() => {
        findCrypto()
    }, [])
    
    return(
        <>
        <h1>CryptoCoins</h1>
        <Header />
        <ul>
        {crypto.map((coin)=>(
            <li key={coin.id}>
                <Link to={`coin/${coin.id}`}>{coin.name}</Link> 
            </li>
       
        ))}
         </ul>
        
        
         </>


    )


}

export default Home