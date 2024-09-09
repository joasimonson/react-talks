import {FormComponent} from "./FormComponent";

export function BaseForm(){

    return (
        <>
            <FormComponent label='Forname' storeBinding='forename'/>
            <FormComponent label='Surname' storeBinding='surname'/>
            <FormComponent label='Email' storeBinding='email'/>
            <FormComponent label='Phone' storeBinding='phone'/>
            <FormComponent label='Query' storeBinding='query'/>

        </>
    )
}