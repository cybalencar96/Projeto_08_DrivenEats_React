import {useState} from 'react'

export default function Food(props) {

    const {
        title,
        text,
        price,
    } = props.attributes

    const priceFormating = `R$ ${price.toFixed(2).replace('.',',')}`;
    const [select, setSelect] = useState(false);
    
    //Seleciona o item e sinaliza para sua FoodSection que foi selecionado ou desselecionado
    function toggleSelect() {
        setSelect(!select);
        props.foodCount(!select);
    }

    const [qty, setQty] = useState(1);

    function changeQty(op) {
        if (op === "-") {
            if (qty > 1) setQty(qty-1);
            if (qty === 1) toggleSelect();
            return;
        }
        setQty(qty+1);
    }

    function RenderQtyButtons() {
        return (
            <div className="qtyContainer">
                <button className="qtyButton qty-remove" onClick={() => changeQty("-")}>-</button>
                <span>{qty}</span>
                <button className="qtyButton qty-add" onClick={() => changeQty("+")}>+</button>
            </div>
        )
    }
    return (
        <div className={"item " + (select ? "choosen" : "") } >
            <div onClick={toggleSelect}>
                <img src="assets/edu-frangoxadrez.jpg" alt=""/>
                <h2>{title}</h2>
                <h4>{text}</h4>
            </div>
            <div className="bottom-food">
                <h3>{priceFormating}</h3>
                {select ? <RenderQtyButtons/> : <></>}
            </div>
        </div>

    )
}