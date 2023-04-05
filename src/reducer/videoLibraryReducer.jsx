const intialState = {
    Category: "",
    historyItem: [],
    likeItem: [],
    watchlatorItem: [],
    Playlistitem: [{
        ID: "3454354576865443546545",
        name: "Favorite",
        Videos: []
    }],
    isModal: false
}
const videoLibraryReducer = (State, action) => {
    switch (action.type) {
        case "CATEGORY":
            return {
                ...State, Category: action.payload
            }
        case "ADD-TO-HISTORY":
            return {
                ...State,
                historyItem: [...State.historyItem, action.payload]
            }
        case "ADD-TO-LIKE":
            return {
                ...State,
                likeItem: [...State.likeItem, action.payload]
            }
        case "REMOVE-TO-LIKE":
            return {
                ...State,
                likeItem: State.likeItem.filter((element) => element._id !== action.payload)
            }
        case "SAVE-TO-WATCH-LATOR":
            return {
                ...State,
                watchlatorItem: [...State.watchlatorItem, action.payload]
            }
        case "REMOVE-TO-WATCH-LATOR":
            return {
                ...State,
                watchlatorItem: State.watchlatorItem.filter((element) => element._id !== action.payload)
            }
        case "OPEN-MODAL":
            return {
                ...State,
                isModal: true,
            };
        case "ADD-ITEM":
            return {
                ...State,
                Playlistitem: [...State.Playlistitem, action.payload],
                // isModal: false 
            };
        case "ADD-MORE-ITEM":
            const updatedPlaylistItem = {
                ...State.Playlistitem[action.index],
                Videos: [...State.Playlistitem[action.index].Videos, ...action.payload.Videos]
            };
            const updatedPlaylistItems = [...State.Playlistitem.slice(0, action.index),
                updatedPlaylistItem, ...State.Playlistitem.slice(action.index + 1)];
            return {
                ...State,
                Playlistitem: updatedPlaylistItems,
                // isModal: false 
            };
        case "CLOSE-MODAL":
            return {
                ...State, isModal: false
            };
        default:
            return State
    }
}
export { videoLibraryReducer, intialState }