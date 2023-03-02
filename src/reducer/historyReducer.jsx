

const historyReducer = (historyState , historyAction) => {
    switch (historyAction.type) {
        case "ADD-TO-HISTORY":
            return {
                ...historyState, 
                historyItem : [...historyState.historyItem ,historyAction]
            }
          
    
        default:
            return historyState
    }
}
export {historyReducer}