import { useState } from "react";
import Food from "./Food"
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