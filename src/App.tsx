import React, {useState} from 'react';
import s from './App.module.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    const [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(true)
    return (
        <div className={s.App}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
        </div>
    );
}

export default App;
