import React, { useState } from 'react';
import { v4 as uuid } from "uuid"

import { useVideoLibraryHook } from '../../context';

import "./Playlistmodal.scss"

function PlaylistModal(videos) {
    const { State, Dispatch } = useVideoLibraryHook()
    const { Playlistitem } = State
    const [name, setName] = useState('')
    const { Newvideo } = videos

    // YE FUNCTION PLAYLIST KE NAAM KO SET KARTA HAI !
    const addNameInPlaylist = (e) => {
        setName(e.target.value)
    }
    // YE FUNCTION ADD BUTTON PE CLICK HONE SE TIGGERED HOTA AUR SAARA DATA PLAYLIST ME SAVE HOJATA HAI !
    const addInPlaylist = () => {
        Dispatch({
            type: "ADD-ITEM",
            payload: { ID: uuid(), name, Videos: [Newvideo] }
        })
    }
    // YE FUNCTION EK NAYI VIDEO KO EXISTING PLAYLIST ME DALTA HAI !
    const addMoreInPlaylist = (index, item) => {
        const isInPlaylist = State.Playlistitem.find((element) => element.ID === item.ID)
        if (isInPlaylist) {
            Dispatch({
                type: "ADD-MORE-ITEM",
                payload: { Videos: [Newvideo] },
                index: index
            })
        } else {
            console.log("nahi hai ")
        }

    }
    const styles = {
        modal: {
            container: "bfy__modal__container",
            content: "bfy__modal__content",
            title : "bfy__modal__title",
            input: "bfy__modal__input",
            itemContainer: "bfy__modal__itemContainer",
            details: "bfy__modal__details",
            checkbox: "bfy__modal__checkbox",
            buttonContainer : "bfy__modal__buttonContainer",
            button: "bfy__modal__button",
            cencelButton : "bfy__modal__cencelButton",
        }
    }
    const getModalView = () => (
        <div className={styles.modal.container}>
            <div className={styles.modal.content}>
                <h2 className={styles.modal.title}>Save to ...</h2>
                <input type="text" className={styles.modal.input} placeholder='Create a new playlist' onChange={(e) => addNameInPlaylist(e)} />
             
            </div>
            <div className={styles.modal.itemContainer}>

            {Playlistitem.map((item, index) => (
                <div key={item.ID} className={styles.modal.details}>
                    <label htmlFor={`"check"${item.ID}`} onClick={() => addMoreInPlaylist(index, item)} >
                        <input type="checkbox" className={styles.modal.checkbox} name="" id={`"check"${item.ID}`} />
                        {item.name}
                    </label>
                </div>
            ))
        }
        </div>
            <div className={styles.modal.buttonContainer}>
                <button className={styles.modal.button} onClick={() => addInPlaylist()}>Create+ </button>
                <button className={styles.modal.cencelButton} onClick={() => Dispatch({ type: "CLOSE-MODAL" })}>Cancel</button>
            </div>
        </div>
    )
    return (
        <div>
            {getModalView()}
        </div>
    )
}
export { PlaylistModal } 