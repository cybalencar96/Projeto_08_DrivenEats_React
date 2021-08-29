import { useState } from "react";
import Food from "./Food"
export default function FoodSection(props) {

    const {
        myKey,
        foods,
        updateSectionInfos
    } = props

    const sectionTitle = ["Primeiro, seu prato","Segundo, sua bebida","Terceiro, sua sobremesa"];
    const [foodsSelected, setFoodsSelected] = useState([]);

    //atualizará quantos itens dessa sessão foram selecionados
    const foodCount = (selectTrue, key, qty) => {
        foods[key].qty = qty;
        //guardando em variável local também pois usando a variavel de estado o React não atualizava o componente pai da Section corretamente
        let localFoodsSelected;
        //mesmo com a variavel local preciso da variavel de estado para armazenar a informação de qtd para esta section em especifico. Ao utilizar variável global,  a contagem era uma unica para todas as sessões
        if (selectTrue) {
            localFoodsSelected = [...foodsSelected,foods[key]];
            setFoodsSelected([...foodsSelected,foods[key]]);
        } else {
            localFoodsSelected = foodsSelected.filter((food,index) => key !== food.myKey);
            setFoodsSelected(foodsSelected.filter((food,index) => key !== food.myKey));
        }

        //envia para o componente App se esta section tem alguma comida selecionada
        updateSectionInfos(localFoodsSelected,myKey);
    }

    const updateQty = (qty,key) => {
        foods.forEach(food => {
            if (food.myKey === key) food.qty = qty;
        });
        foodsSelected.forEach(food => {
            if (food.myKey === key) food.qty = qty;
        });
        updateSectionInfos(foodsSelected,myKey);
    }

    return(
        <div className="middle-bars">
            <h1 className="font-righteous">{sectionTitle[myKey]}</h1>
            <div className="itens">
                {
                    foods.map((food,index) => {
                            //adicionando o atributo myKey no array foods para quando eu atualizar a var de estado "foodsSelected" com o arr Foods (line22), eu ja ter a key nela. 
                            food.myKey = index;
                            return <Food updateQty={updateQty} foodCount={foodCount} attributes={food}/>
                    })
                }
            </div>
        </div>
    );
}