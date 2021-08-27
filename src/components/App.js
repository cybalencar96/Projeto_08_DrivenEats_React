import FoodSection from "./FoodSection";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import vars from "../vars"
import { useState } from "react";

export default function App () {
    const foodTypes = ["plate","drink","dessert"];
    const [sectionsSelected, setSectionSelected] = useState(foodTypes.map(() => false));


    //esta funcao informa que houve alguma alteração na FoodSection. A cada alteração ela atualiza se tem algum item selectionado na FoodSection através da variavel bool. 
    const isSectionSelected = (bool,index) => {
        setSectionSelected([...sectionsSelected.map((sectionSelected,idx) => {
            return (index === idx) ? (sectionSelected = bool) : (sectionSelected = sectionSelected)
        })]);
    }

    const allSectionsSelected = !sectionsSelected.includes(false);

    return (
        <>
            <Topbar />
            <main>
                {
                    foodTypes.map((foodType,index) =>  (               
                    <FoodSection 
                         myKey={index} 
                         foods={vars.foods.filter((food => food.type === foodType))}
                         isSectionSelected={isSectionSelected}
                    />))
                }
            </main>
            <BottomBar active={allSectionsSelected}/>   
        </>
    );
}