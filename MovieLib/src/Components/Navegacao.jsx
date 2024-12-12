import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navegacao.css'

// Imports de variavéis do .env com VITE //
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Navegacao = () => {
    const navigate = useNavigate()
    const [selectTab, setSelectTab] = useState("populares")
    
    const onClickNavegacao = (aba) => {
        setSelectTab(aba)
        navigate(`/${aba}`)
    }

    return (
        <div className="container_navegacao">
            <ul className="d-flex align-items-center">
                <li className={`${selectTab === "populares" ? "active" : ""}`} onClick={() => onClickNavegacao("populares")}>
                    <span to="/">Populares</span>
                </li>
                <li className={`${selectTab === "em_cartaz" ? "active" : ""}`} onClick={() => onClickNavegacao("em_cartaz")}>
                    <span>Em Cartaz</span>
                </li>
                <li className={`${selectTab === "bem_avaliados" ? "active" : ""}`} onClick={() => onClickNavegacao("bem_avaliados")}>
                    <span>Mais Bem Avaliados</span>
                </li>
            </ul>
        </div>
    )
}

export default Navegacao