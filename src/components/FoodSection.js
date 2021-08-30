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

        let localFoodsSelected;

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
                            food.myKey = index;
                            return <Food updateQty={updateQty} foodCount={foodCount} attributes={food}/>
                    })
                }
            </div>
        </div>
    );
}