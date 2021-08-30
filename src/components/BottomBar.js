import {Link} from "react-router-dom"

export default function BottomBar(props) {
    const {active} = props;
    
    return (
        <nav class="bottom-bar">
            <Link to={active ? `/revisar` : "/"} className="link">
                <button id="sendButton" className={active ? "send-btn-enable" : "send-btn-disable"}>
                    {active ? 
                    "Fechar pedido" : 
                    "Selecione os 3 itens para fechar o pedido"}
                </button>
            </Link>
        </nav>
    )
}