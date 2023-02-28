import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

export const Accordion1 = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={action('')}/>
export const Accordion2 = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={action('')}/>
export const AccordionChanging = () => {
    const [value,setValue] = useState(true)
    return <Accordion titleValue={'BlaBla'} collapsed={value} onChange={()=>setValue(value)}/>
}
