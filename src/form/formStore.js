import { create } from 'zustand'

const initialState = {
    forename: 'forename not set',
    surname: 'surname not set',
    email: 'email not set',
    phone: 'phone not set',
    query: 'query not set'
}
const formStore = create((set,get) => ({
    ...initialState,
    updateForm: (data) => set({...data}),
    reset: () => set({...initialState})
}))

export default formStore