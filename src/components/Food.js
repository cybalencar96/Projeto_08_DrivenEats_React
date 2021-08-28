import {useState} from 'react'

export default function Food(props) {

    const {
        foodCount,
        attributes,
        updateQty
    } = props

    const {
        title,
        text,
        price,
        myKey
    } = attributes
    let {qty} = attributes;
    
    const priceFormating = `R$ ${price.toFixed(2).replace('.',',')}`;
    const [select, setSelect] = useState(false);
    
    //Seleciona o item e sinaliza para sua FoodSection que foi selecionado ou desselecionado
    function toggleSelect() {
        setSelect(!select);
        foodCount(!select,myKey,qty);
    }

    const [qtyState, setQtyState] = useState(1);

    function changeQty(op) {
        if (op === "-") {
            if (qtyState > 1) {
                setQtyState(qtyState-1);
                qty--;
            updateQty(qty,myKey);
            };
            if (qtyState === 1) toggleSelect();
            return;
        }
        setQtyState(qtyState+1);
        qty++;
        updateQty(qty,myKey);
    }

    function RenderQtyButtons() {
        return (
            <div className="qtyContainer">
                <button className="qtyButton qty-remove" onClick={() => changeQty("-")}>-</button>
                <span>{qtyState}</span>
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