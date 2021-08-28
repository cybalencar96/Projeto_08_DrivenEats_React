import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Review from "./Review"
import Home from "./Home";
import { useState } from "react";

export default function App () {

    const [sections, setSections] = useState([]);
    function receiveSections(sect) {
        setSections(sect)
    }

    return (
        <>
            <Router>
                <Switch>

                    <Route path="/" exact>
                        <Home sendSections={receiveSections}/>
                    </Route>  

                    <Route path="/revisar">
                        <Review sections={[...sections]}/>
                    </Route> 
                     
                </Switch>
            </Router>
        </>
    );
}