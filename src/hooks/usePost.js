import { useContext } from "react"
import { postContext } from "../context"

export const usePost = () => {
    return useContext(postContext);
}