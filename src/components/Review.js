import { useState } from "react";
import ReviewFood from "./ReviewFood";
import ReviewButtons from "./ReviewButtons";

export default function Review({sections}) {
    //forma de mostrar a tela gradativamente
    const [visible, setVisible] = useState(true);
    setTimeout(() => setVisible(false),20);
    
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

                   <ReviewButtons sections={sections} total={total}/>
                </div>
            </div>  
        </>
    )
}