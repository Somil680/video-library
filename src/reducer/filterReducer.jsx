
const filterReducder = (filterState , action) => {
    switch (action.type) {
        case "CATEGORY" :
            return {
                ...filterState , Category: action.payload
            }
        default:
            return filterState
    }
}
export {filterReducder}