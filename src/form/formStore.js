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
    setForename: (forename) => set({forename}),
    setSurname: (surname) => set({surname}),
    setEmail: (email) => set({email}),
    setPhone: (phone) => set({phone}),
    setQuery: (query) => set({query})
}))

export default formStore