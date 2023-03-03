
const LikeReducer = (likeState , action)=>{
  switch (action.type) {
    case "ADD-TO-LIKE":
          return {
              ...likeState,
              likeItem:[...likeState.likeItem,action.payload]
          }
      case "REMOVE-TO-LIKE":
          return {
              ...likeState ,
             likeItem : likeState.likeItem.filter((ele)=> ele._id !== action.payload)
          }
  
    default:
        break;
  }

}
export {LikeReducer}