import React, { useState } from "react"

import { usePlaylist } from "../../context"
import { Navbar, MenuBar } from "../../Components"
import { Playlistcard } from "./Playlistcard"

import "./Playlist.scss"

function Playlist() {

    const [data, setData] = useState([])
    const { playlistState } = usePlaylist()
    const { Playlistitem } = playlistState
    console.log(data)
    const styles = {
        header: "bfy__playlist__header",
        playCard: {
            content: "bfy__playlist__playCard-content",
            description: "bfy__playlist__playCard-description",
            thumbnail: "bfy__playlist__playCard-thumbnail",
            details: "bfy__playlist__playCard-details",
            font: "bfy__playlist__playCard-font",
            button: "bfy__playlist__playCard-button"
        },
        playItem: {
            content: " bfy__playlist__playItem-content"
        }
    }

    function Callfunction(item) {
        setData(item.Videos)
    }

    const getPlaylist = () => (
        <div className={styles.playCard.content}>
            {Playlistitem.map((item) => (
            <div key={item.ID} className={styles.playCard.description} >
                <div>
                    <img src="https://img.youtube.com/vi/AjWfY7SnMBI/maxresdefault.jpg " className={styles.playCard.thumbnail} />
                </div>
                <div className={styles.playCard.details}>
                    <h1>{item.name}</h1>
                    <p className={styles.playCard.font} >{item.Videos.length} video</p>
                </div>
                <button className={styles.playCard.button} onClick={() => Callfunction(item)} >View All</button>
            </div>))}
        </div>
    )
    const getPlaylistCard = (playlistCard) => (
        <Playlistcard
            playitem={playlistCard}
            key={playlistCard._id}
        />
    )
    const getPlaylistItem = () => (
        <div className={styles.playItem.content}>
            {data.map(getPlaylistCard)}
        </div>
    )

    return (<div>
        <Navbar />
        <MenuBar/>
        <div className={styles.header}>
            {getPlaylist()}
            {getPlaylistItem()}
        </div>
    </div>)
}

export { Playlist }