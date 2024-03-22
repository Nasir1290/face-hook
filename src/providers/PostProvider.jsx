import React, { useContext, useReducer } from 'react'
import { postContext } from '../context'
import { initialState, postsReducer } from '../reducers/postsReducer'

const PostProvider = ({children}) => {
    const [state,dispatch] = useReducer(postsReducer,initialState)
  return (
    <postContext.Provider value={{state,dispatch}}>
      
    </postContext.Provider>
  )
}

export default PostProvider
