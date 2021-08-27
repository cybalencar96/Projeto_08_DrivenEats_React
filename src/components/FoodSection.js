import { useState } from "react";
export default function FoodSection(props) {

    const {
        myKey,
        foods,
        isSectionSelected
    } = props

    const sectionTitle = ["Primeiro, seu prato","Segundo, sua bebida","Terceiro, sua sobremesa"];
    const [qtyFoodsSelected, setQtyFoodsSelected] = useState(0);

    //atualizará quantos itens dessa sessão foram selecionados
    const foodCount = (selectTrue) => {
        //guardando em variável local também pois usando a variavel de estado o React não atualizava o componente pai da Section corretamente
        let qtd = selectTrue ? qtyFoodsSelected+1 : qtyFoodsSelected-1
        
        //mesmo com a variavel local preciso da variavel de estado para armazenar a informação de qtd para esta section em especifico. Ao utilizar variável global,  a contagem era uma unica para todas as sessões
        if (selectTrue) setQtyFoodsSelected(qtyFoodsSelected + 1);
        if (!selectTrue) setQtyFoodsSelected(qtyFoodsSelected - 1);

        //envia para o componente App se esta section tem alguma comida selecionada
        isSectionSelected(qtd > 0 ? true : false,myKey);
    }

    return(
        <div className="middle-bars">
            <h1 className="font-righteous">{sectionTitle[myKey]}</h1>
            <div className="itens">
                {
                    foods.map((food,index) => (
                            <Food myKey={index} foodCount={foodCount} attributes={food}/>
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