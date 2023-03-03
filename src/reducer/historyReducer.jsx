

const historyReducer = (historyState , historyAction) => {
    switch (historyAction.type) {
        case "ADD-TO-HISTORY":
            return {
                ...historyState, 
                historyItem : [...historyState.historyItem ,historyAction.payload]
            }
          
    
        default:
            return historyState
    }
}
export {historyReducer}