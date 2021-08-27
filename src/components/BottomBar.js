export default function BottomBar() {
    return (

        //FALTA CRIAR A FUNCAO ENABLED (TRUE OU FALSE) E DE CONFIRM ORDER (RENDERIZAR NOVA JANELA)
        <nav class="bottom-bar">
            <button id="sendButton" onClick={enabled ? confirmOrder : ""}>
                {enabled ? 
                "Fechar pedido" : 
                "Selecione os 3 itens para fechar o pedido"}
            </button>
        </nav>
    )
}