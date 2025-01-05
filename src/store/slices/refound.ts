import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Request {
  id: string
  categoryId: string
  title: string
  value: number
}

interface RefoundState {
  requests: Request[]
}

const initialState: RefoundState = {
  requests: [],
}

const refoundSlice = createSlice({
  name: 'refound',
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<Omit<Request, 'id'>>) => {
      const id = state.requests.length.toString()
      const newRequest = { id, ...action.payload }

      state.requests.unshift(newRequest)
    },
    deleteRequest: (state, action: PayloadAction<string>) => {
      const requestIdToBeRemoved = action.payload

      state.requests = state.requests.filter(
        request => request.id !== requestIdToBeRemoved
      )
    },
  },
})

export const refoundReducer = refoundSlice.reducer
export const refoundActions = refoundSlice.actions
