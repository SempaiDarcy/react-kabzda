import {useState} from "react";
import s from './../../App.module.css'

type AccordionPropsType = {
    titleValue:string
    // collapsed:boolean
}

export const UncontrolledAccordion = (props:AccordionPropsType) => {
    const [collapsed,setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            { !collapsed && <AccordionBody/>}

        </div>
    );
};
type AccordionTitlePropsType = {
    title:string
    onClick: () => void
}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3 className={s.Cursor} onClick={()=>(props.onClick())}>
            -- {props.title} --
        </h3>
    );
};
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};
