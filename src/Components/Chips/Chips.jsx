import React from 'react';

import {useVideoLibraryHook } from '../../context';

import "./Chips.scss"

const Chips = () => {

       const { Dispatch } = useVideoLibraryHook()
       
       const styles = {
              container: "bfy__Chips__container",
              Button: {
                     text: "bfy__Chips__Button-text",
                     radioButton : "bfy__Chips__Button-radioButton"
              }
       }
       const getChipsView = () => (
             <div className={styles.container}>
        <label className={styles.Button.text} onClick={()=> Dispatch({type : "CATEGORY" , payload : "All"})}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton} />Explore  
        </label>
         <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Spirituality" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Ranveer Allahbadia
        </label>
        <label className={styles.Button.text}  onClick={() => Dispatch({ type: "CATEGORY", payload: "Coding" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton} />Coding
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Talks" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Talks
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Finanace" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Finanace
        </label>
         <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Mystery" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Dhruv Rathee
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "StockMarket" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Stock Market
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Cyrpto" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Cyrpto
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Bollywood" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Bollywood
        </label>
          <label className={styles.Button.text}  onClick={() => Dispatch({ type: "CATEGORY", payload: "Coding" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton} />Apna Collage
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Spirituality" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Spirituality
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Mystery" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Mystery
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "StockMarket" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Sandeep Maheshwari
        </label>
        <label className={styles.Button.text} onClick={() => Dispatch({ type: "CATEGORY", payload: "Talks" })}>
            <input type="radio" name="myRadio" className={styles.Button.radioButton}/>Famous CEOs
        </label>
    </div> 
       )
return (<div>
    {getChipsView()} 
    </div>)
}
export {Chips}