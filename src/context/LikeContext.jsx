import { createContext, useContext, useReducer } from "react";
import { LikeReducer } from "../reducer";

const likeContext = createContext()

const LikeProvider = ({ children }) => {

    const [likeState , likeDispatch] = useReducer(LikeReducer , {likeItem : []})

    return <likeContext.Provider
    value={{likeState , likeDispatch}}
    >{children}</likeContext.Provider>
}

const useLike = ()=> useContext(likeContext)

export {LikeProvider , useLike}