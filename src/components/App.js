import FoodSection from "./FoodSection";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import vars from "../vars"


export default function App () {
    const foodTypes = ["plate","drink","dessert"];

    return (
        <>
            <Topbar />
            <main>
                {
                    foodTypes.map((foodType,index) =>  (               
                    <FoodSection 
                         myKey={index} 
                         foodType={foodType} 
                         foods={vars.foods}
                    />))
                }
            </main>
            <BottomBar />   
        </>
    );
}