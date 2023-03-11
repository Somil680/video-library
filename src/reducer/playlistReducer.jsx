const initialPlaylist = {
    Playlistitem: [{
        ID: "3454354576865443546545",
        name: "Favorite",
        Videos: []
    }],
        isModal: false
    }

function playlistReducer(playlistState, action) {
    switch (action.type) {
        case "OPEN-MODAL":
            return {
                ...playlistState,
                isModal: true,
                
            };
        case "ADD-ITEM":
            return {
                ...playlistState,
                Playlistitem: [...playlistState.Playlistitem, action.payload],
                // isModal: false 
            };
        case "ADD-MORE-ITEM":
            const updatedPlaylistItem = {...playlistState.Playlistitem[action.index],
            Videos: [...playlistState.Playlistitem[action.index].Videos, ...action.payload.Videos]};
            const updatedPlaylistItems = [...playlistState.Playlistitem.slice(0, action.index),
            updatedPlaylistItem,...playlistState.Playlistitem.slice(action.index + 1)];
            return {
                ...playlistState,
                Playlistitem: updatedPlaylistItems,
                // isModal: false 
            };
        case "CLOSE-MODAL":
            return { ...playlistState, isModal: false };
    
        default:
            return playlistState;
    }
}
export { playlistReducer, initialPlaylist }
