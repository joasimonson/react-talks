import * as PropTypes from "prop-types";
import {TextField, Typography} from "@mui/material";
import formStore from "./formStore";



export function FormComponent(props) {

    const {storeValue, setStoreValue} = formStore((state) => state[props.storeBinding])
    return (
        <>
            <Typography>{props.label}</Typography>
            <TextField

                defaultValue={storeValue}
            >
            </TextField>
        </>
    )

}

FormComponent.propTypes = {label: PropTypes.string};