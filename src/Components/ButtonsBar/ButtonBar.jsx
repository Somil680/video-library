import React from 'react';
import { useFilter } from '../../context';
import "./ButtonBar.css"
const ButtonBar = () => {
    const {filterDispatch} = useFilter()
return (<>
    <div>
        <label onClick={()=> filterDispatch({type : "CATEGORY" , payload : "All"})}>
            <input type="radio" name="myRadio" className="radio-button" />All
            
        </label>
        <label>
            <input type="radio" name="myRadio" className="radio-button"  onClick={() => filterDispatch({ type: "CATEGORY", payload: "Coding" })}/>Coding
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Talks" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Talks
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Finanace" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Finanace
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "StockMarket" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Stock Market
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Cyrpto" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Cyrpto
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Bollywood" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Bollywood
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Spirituality" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Spirituality
        </label>
        <label onClick={() => filterDispatch({ type: "CATEGORY", payload: "Mystery" })}>
            <input type="radio" name="myRadio" className="radio-button"/>Mystery
        </label>


{/* 
            <button className='filter-btn' >ALL</button>
          <button className='filter-btn' >Coding</button>
          <button className='filter-btn' >Talks</button>
          <button className='filter-btn' >Finanace</button>
          <button className='filter-btn' >Stock Market</button>
          <button className='filter-btn' >Cyrpto</button> */}
          
    </div>
        
    </>)
}
export {ButtonBar}