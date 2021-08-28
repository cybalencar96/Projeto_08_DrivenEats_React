import {Link} from "react-router-dom";

export default function ReviewButtons({sections, total}) {

    function confirmOrder() {
        let strMessage = `Olá, gostaria de fazer o pedido \n `//   myPlate.plateName  \n - Bebida:   myDrink.drinkName  \n - Sobremesa:   myDessert.dessertName  \n Total: R$   finalCost.toFixed(2)  \n \n Nome:   customerName  \n Endereço:   customerAddress`;
        let platesMsg = "\n- Pratos:\n"
        let drinksMsg = "\n- Bebidas:\n"
        let dessertsMsg = "\n- Sobremesas:\n"
        let totalMsg = `\nTotal: R$ ${total.toFixed(2).replace('.',',')}\n`;

        sections.forEach(section => {
            section.forEach(food => {
                if (food.type === "plate") {
                    platesMsg = platesMsg + `    - ${food.title} \n`
                }
                if (food.type === "drink") {
                    drinksMsg = drinksMsg + `    - ${food.title} \n`
                }
                if (food.type === "dessert") {
                   dessertsMsg = dessertsMsg + `    - ${food.title} \n`
                }
            })
        })

        strMessage = strMessage + platesMsg + drinksMsg + dessertsMsg + totalMsg

        const URIencodeMessage = encodeURIComponent(strMessage);
        const wppStr = "https://wa.me/5521967670121?text=" + URIencodeMessage;
        window.open(wppStr);
    }


    return (
        <>
            <Link to="/">
                <button class="sendOrder" onClick={confirmOrder}>Tudo certo, pode pedir!</button>
            </Link>
            <Link to="/">
                <button class="cancel">Cancelar</button>
            </Link>
        </>
    )
}