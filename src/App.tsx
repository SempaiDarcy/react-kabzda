import React, {useState} from 'react';
import s from './App.module.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn,setSwitchOn] = useState<boolean>(false)
    return (
        <div className={s.App}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
        </div>
    );
}

export default App;
