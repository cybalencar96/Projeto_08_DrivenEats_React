import FoodSection from "./FoodSection";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import vars from "../vars"
import { useState } from "react";

export default function App () {
    const foodTypes = ["plate","drink","dessert"];
    const [sectionSelected, setSectionSelected] = useState(false);

    const isSectionSelected = (bool) => {
        setSectionSelected(bool);
        console.log(sectionSelected)
    }
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
            <BottomBar />   
        </>
    );
}