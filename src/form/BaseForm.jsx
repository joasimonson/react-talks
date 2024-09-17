import {FormComponent} from "./FormComponent";
import {Button} from "@mui/material";
import formStore from "../stores/formStore";

export function BaseForm(){
    const {registered, setRegistered} = formStore((state) => ({
        registered: state.registered,
        setRegistered: state.setRegistered,
    }))
    return (
        <>
            <FormComponent label='Forename' />
            <FormComponent label='Surname'/>
            <FormComponent label='Email' />
            <FormComponent label='Phone' />
            <FormComponent label='Query'/>
            <br/>
            <Button variant='outlined'
            onClick={()=> {if(!registered)setRegistered(true)} }
            >
                Register
            </Button>
        </>
    )
}