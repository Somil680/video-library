import React from 'react';
import { useFilter } from '../../context';
import "./ButtonBar.css"
const ButtonBar = () => {
    const {filterDispatch} = useFilter()
return (<>
    <div className='Button-container'>
        <label className='label' onClick={()=> filterDispatch({type : "CATEGORY" , payload : "All"})}>
            <input type="radio" name="myRadio" className="radio-button" />Explore
            
        </label>
        <label className='label'  onClick={() => filterDispatch({ type: "CATEGORY", payload: "Coding" })}>
            <input type="radio" name="myRadio" className="radio-button" />Coding
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Talks" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Talks
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Finanace" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Finanace
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "StockMarket" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Stock Market
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Cyrpto" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Cyrpto
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Bollywood" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Bollywood
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Spirituality" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Spirituality
        </label>
        <label className='label' onClick={() => filterDispatch({ type: "CATEGORY", payload: "Mystery" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Mystery
        </label>

          
    </div>
        
    </>)
}
export {ButtonBar}