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
    const [qtyState, setQtyState] = useState(1);
    
    function toggleSelect() {
        if (!select) {
            setQtyState(1);
            qty = 1;
        }
        setSelect(!select);
        foodCount(!select,myKey,qty);
        
    }


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