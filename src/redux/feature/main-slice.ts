import { InitialState } from '@/types/redux/main'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialState = {
	loading      : false,
	isAuthorized : true,
}

export const main = createSlice( {
	name     : 'auth',
	initialState,
	reducers : {
		setLoading : ( state, actions: PayloadAction<boolean> ) => {
			return {
				...state,
				loading : actions.payload
			}
		},
	},
} )

export const { setLoading } = main.actions
export default main.reducer
