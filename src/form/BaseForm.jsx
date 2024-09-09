import {FormComponent} from "./FormComponent";
import {Button} from "@mui/material";

export function BaseForm(){

    return (
        <>
            <FormComponent label='Forename' />
            <FormComponent label='Surname'/>
            <FormComponent label='Email' />
            <FormComponent label='Phone' />
            <FormComponent label='Query'/>
            <br/>
            <Button variant='outlined'>Register</Button>
        </>
    )
}