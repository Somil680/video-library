
function videoReducer(videoState , action) {
    switch (action.type) {
        case "Fetchvideos":
            return {
               ...videoState , video:[ ...videoState.video ,...action.payload] 
             }
           
    
        default:
            return videoState;
    }
}
export {videoReducer}