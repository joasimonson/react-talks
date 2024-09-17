import { create } from 'zustand'

const initialState = {
    registered: false,
    forename: '',
    surname: '',
    email: '',
    phone: '',
    query: ''
}
const formStore = create((set,get) => ({
    ...initialState,
    setForename: (forename) => set({forename}),
    setSurname: (surname) => set({surname}),
    setEmail: (email) => set({email}),
    setPhone: (phone) => set({phone}),
    setQuery: (query) => set({query}),
    setRegistered: (registered) => set({registered})
}))

export default formStore