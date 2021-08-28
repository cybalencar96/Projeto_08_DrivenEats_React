import { useState } from "react";
import {Link} from "react-router-dom";
import ReviewFood from "./ReviewFood";

export default function Review({sections}) {

    //forma de mostrar a tela gradativamente
    const [visible, setVisible] = useState(true);
    setTimeout(() => setVisible(false),20);

    function confirmOrder() {
        let strMessage = `Olá, gostaria de fazer o pedido \n - Pratos:\n`//   myPlate.plateName  \n - Bebida:   myDrink.drinkName  \n - Sobremesa:   myDessert.dessertName  \n Total: R$   finalCost.toFixed(2)  \n \n Nome:   customerName  \n Endereço:   customerAddress`;
        sections.forEach(section => {
            section.forEach(food => {
                if (food.type === "plate") {
                    strMessage = strMessage + `    - ${food.title} \n`
                }
            })
        })

        strMessage = strMessage + `\n- Bebidas:\n`
        sections.forEach(section => {
            section.forEach(food => {
                if (food.type === "drink") {
                    strMessage = strMessage + `    - ${food.title} \n`
                }
            })
        })

        strMessage = strMessage + `\n- Sobremesas:\n`;
        sections.forEach(section => {
            section.forEach(food => {
                if (food.type === "dessert") {
                    strMessage = strMessage + `    - ${food.title} \n`
                }
            })
        })
        strMessage = strMessage + `\nTotal: R$ ${total.toFixed(2).replace('.',',')}\n`;

        const URIencodeMessage = encodeURIComponent(strMessage);
        const wppStr = "https://wa.me/5521967670121?text=" + URIencodeMessage;
        window.open(wppStr);
    }

    let total = 0;
    return (
        <>
            <div class={"confirm-order " + (visible ? "visuallyHidden" : "")} id="confirmWindow">
                <div>
                    <strong>Confirme seu pedido</strong>

                    {
                        sections.map(foods => (
                                foods.map(food => { 
                                    total = total + (food.price * food.qty);
                                    return <ReviewFood title={food.title} price={food.price} qty={food.qty}/>
                                })
                            )
                        )
                    }

                    <div class="confirm-order-item">
                        <strong>TOTAL</strong>
                        <strong>{`R$ ${total.toFixed(2).replace('.',',')}`}</strong>
                    </div>

                    <Link to="/">
                        <button class="sendOrder" onClick={confirmOrder}>Tudo certo, pode pedir!</button>
                    </Link>
                    <Link to="/">
                        <button class="cancel">Cancelar</button>
                    </Link>
                </div>
            </div>  
        </>
    )
}