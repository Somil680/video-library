
function videoReducer(videoState , action) {
    switch (action.type) {
        case "Fetchvideos":
            return {
               ...videoState , videos:[ ...videoState.videos ,...action.payload] 
             }
           
    
        default:
            return videoState;
    }
}
export {videoReducer}