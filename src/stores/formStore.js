import { create } from 'zustand'

const initialState = {
    registered: false,
    forename: '',
    surname: '',
    email: '',
    phone: '',
}
const formStore = create((set,get) => ({
    ...initialState,
    setForename: (forename) => {
        console.log("forename",forename)
        set({ forename });
    },
    setSurname: (surname) => {
        console.debug("surname",surname);
        set({ surname });
    },
    setEmail: (email) => {
        console.warn("email", email)
        set({ email });
    },
    setPhone: (phone) => {
        console.info("phone", phone)
        set({ phone });
    },
    setRegistered: (registered) => {
        set({ registered });
    },
   queryMessage: () => {
        console.log("entered queryMessage Function");
        return `Hello, My name is ${get().forename} ${get().surname}. I can be reached at ${get().email} or ${get().phone}.`
   }
}))

export default formStore