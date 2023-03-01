import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
export const CollapseMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value,setValue] = useState(true)
    return <Accordion titleValue={'BlaBla'} collapsed={value} onChange={()=>setValue(!value)}/>
}
