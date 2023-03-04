import React, {useState} from 'react';
import s from './../../App.module.css'
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    defaultValue?:RatingValueType;
    onChange:(value:RatingValueType)=>void
}
export const UnControlledRating = (props:RatingPropsType) => {
    const [value,setValue] = useState<RatingValueType>(props.defaultValue?props.defaultValue : 0)
    return (
        <div>
            <Star selected={value>0} setValue={()=> {
                setValue(1);props.onChange(0)
            }}/>
            <Star selected={value>1} setValue={()=> {
                setValue(2);props.onChange(1)
            }}/>
            <Star selected={value>2} setValue={()=> {
                setValue(3);props.onChange(2)
            }}/>
            <Star selected={value>3} setValue={()=> {
                setValue(4);props.onChange(3)
            }}/>
            <Star selected={value>4} setValue={()=> {
                setValue(5);props.onChange(4)
            }}/>
        </div>
    );
};


type StarPropsType = {
    selected:boolean
    setValue:()=>void
}
const Star = (props:StarPropsType) => {
    // const [select,setSelect] = useState(props.selected)
    // if(select) {
    //     return <span onClick={()=>setSelect(false)}><b>star </b></span>
    // }
    // else {
    //     return <span onClick={()=>setSelect(true)}>star </span>
    // }
    return <span className={s.Cursor} onClick={()=>{props.setValue()}}>
        { props.selected ? <b>star </b>: 'star '}
    </span>
}