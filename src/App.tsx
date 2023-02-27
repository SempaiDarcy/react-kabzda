import React from 'react';
import s from './App.module.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className={s.App}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'User'}/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
        </div>
    );
}

export default App;
