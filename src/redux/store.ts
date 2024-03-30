import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './feature/main-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore( {
	reducer : { mainReducer },
} )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
