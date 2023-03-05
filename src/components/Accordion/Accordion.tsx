import React from 'react';


type ItemType = {
    title:string,
    value:number
}
export type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:()=>void
    items:ItemType[]
    onClick:()=>void
}

const Accordion = (props:AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}

        </div>
    );
};
type AccordionTitlePropsType = {
    title:string
    onChange:() => void

}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => props.onChange()}>
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

export default Accordion;