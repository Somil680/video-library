import React, { useState } from 'react';



function playlistReducer(playlistState, action) {

    switch (action.type) {
        case "OPEN-MODAL":
            return { ...playlistState, isModal: true };
        case "CLOSE-MODAL":
            return { ...playlistState, isModal: false };
    
        default:
            return playlistState;
    }
}
export { playlistReducer }