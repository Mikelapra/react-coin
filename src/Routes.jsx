
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Coin from './pages/Coin.jsx'
import Favorites from './pages/Favorites.jsx'


function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coin/:id" element={<Coin />}/>
                <Route path="/favorites" element={<Favorites />}/>

            </Routes>
        </Router>
    )


}

export default RoutesApp