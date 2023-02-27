import React from 'react';



type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
}

const Accordion = (props:AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}

        </div>
    );
};
type AccordionTitlePropsType = {
    title:string
}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3>
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