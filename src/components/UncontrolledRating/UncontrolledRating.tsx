import React, {useState} from 'react';


export const UnControlledRating = () => {
    const [value,setValue] = useState(4)
    return (
        <div>
            <Star selected={value>0}/>
            <Star selected={value>1}/>
            <Star selected={value>2}/>
            <Star selected={value>3}/>
            <Star selected={value>4}/>
        </div>
    );
};


type StarPropsType = {
    selected:boolean
}
const Star = (props:StarPropsType) => {
    // const [select,setSelect] = useState(props.selected)
    // if(select) {
    //     return <span onClick={()=>setSelect(false)}><b>star </b></span>
    // }
    // else {
    //     return <span onClick={()=>setSelect(true)}>star </span>
    // }


    if(props.selected) {
        return <span><b>star</b></span>
    }
    else {
        return <span>star </span>
    }
}