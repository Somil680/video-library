import React from 'react';

function watchReducer(watchState, action) {
    console.log(watchState.watchlatorItem)
    switch (action.type) {
        case "SAVE-TO-WATCH-LATOR":
            return {
                ...watchState,
                watchlatorItem : [...watchState.watchlatorItem , action.payload]
            }
        case "REMOVE-TO-WATCH-LATOR":
            return {
                ...watchState,
                watchlatorItem : watchState.watchlatorItem.filter((items) => items._id !== action.payload)
            }
            
    
        default:
            return watchState;
    }

}
export {watchReducer}