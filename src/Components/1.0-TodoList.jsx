import React, { useReducer } from "react";

//useREducerFunction
import { useReducerFunction } from './Hooks/Reducer/1.0-useReducerFunction';


export const TodoList = () => {

    const initialState = [ 'initalState' ]

    const [ stateList, dispatch ] = useReducer( useReducerFunction, initialState )

    return(

        <>
            <h1> { stateList } </h1>
            <button onClick={ () => dispatch( { type: 'ADDtodo'  } ) }> add  </button>
        
        </>

    )
}