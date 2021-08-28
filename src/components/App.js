import FoodSection from "./FoodSection";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import vars from "../vars"
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Review"

export default function App () {
    const foodTypes = ["plate","drink","dessert"];
    //criando array de sections, cada section possui um array de foods, e cada food é um objeto
    const [sections, setSections] = useState(foodTypes.map(() => []));

    const updateSectionInfos = (sectionInfo, sectionKey) => {
        sections[sectionKey] = sectionInfo
        setSections([...sections]);
    }
    //Verifica se ativa botão
    let active = sections.map(section => section.length !== 0);

    console.log(sections)
    return (
        <>
            <Router>
                <Topbar />

                <main>
                    {
                        foodTypes.map((foodType,index) =>  (               
                        <FoodSection 
                            myKey={index} 
                            foods={vars.foods.filter((food => food.type === foodType))}
                            updateSectionInfos={updateSectionInfos}
                        />))
                    }
                </main>

                <BottomBar active={!active.includes(false)}/>  

                <Switch>
                    <Route path="/revisar">
                        <Review sections={[...sections]}/>
                    </Route>  
                </Switch>
            </Router>
        </>
    );
}