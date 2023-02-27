import React from 'react';


type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:(collapsed:boolean)=>void
}

const Accordion = (props:AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onCLick={props.onChange} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}

        </div>
    );
};
type AccordionTitlePropsType = {
    title:string
    onCLick:(collapsed:boolean)=>void
    collapsed:boolean
}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3 onClick={()=>props.onCLick(props.collapsed)}>
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