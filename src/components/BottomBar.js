import {Link} from "react-router-dom"

export default function BottomBar(props) {
    const {active} = props;
    
    function confirmOrder() {
        console.log("Order confirmed")
    }
    return (
        //FALTA RENDERIZAR JANELA DE CONFIRM ORDER AO CLICAR NO BOTAO
        <nav class="bottom-bar">
            <Link to="/revisar" className="link">
                <button id="sendButton" className={active ? "send-btn-enable" : "send-btn-disable"} onClick={active ? confirmOrder : () => {}}>
                    {active ? 
                    "Fechar pedido" : 
                    "Selecione os 3 itens para fechar o pedido"}
                </button>
            </Link>
        </nav>
    )
}