import { useState } from "react";

export default function FoodSection(props) {

    const {
        myKey,
        foods,
        isSectionSelected
    } = props

    //possíveis soluções para renderizar o desselecionar
    //array com informações no pai de quem ta slecionado
    //passar onClick funcao como props do Food. e dentro de Food chamar essa funcao dentro de uma div pelo onClick 

    const sectionTitle = ["Primeiro, seu prato","Segundo, sua bebida","Terceiro, sua sobremesa"];
    const [qtyFoodsSelected, setQtyFoodsSelected] = useState(0);

    //atualizará quantos itens dessa sessão foram selecionados
    const foodSelect = (selectTrue) => {
        if (selectTrue) setQtyFoodsSelected(qtyFoodsSelected + 1);
        if (!selectTrue) setQtyFoodsSelected(qtyFoodsSelected - 1);
        isSectionSelected(qtyFoodsSelected > 0 ? true : false);
    }

    return(
        <div className="middle-bars">
            <h1 className="font-righteous">{sectionTitle[myKey]}</h1>
            <div className="itens">
                {
                    foods.map((food,index) => (
                            <Food myKey={index} foodCount={foodSelect} attributes={food}/>
                    ))
                }
            </div>
        </div>
    );
}



function Food(props) {

    const {
        title,
        text,
        price,
    } = props.attributes

    const priceFormating = `R$ ${price.toFixed(2).replace('.',',')}`;
    const [select, setSelect] = useState(false);
    
    function toggleSelect() {
        props.foodCount(!select);
        setSelect(!select);
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