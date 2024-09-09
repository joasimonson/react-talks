import * as PropTypes from "prop-types";
import {TextField, Typography} from "@mui/material";
import formStore from "./formStore";



export function FormComponent(props) {

    const {storeValue, setStoreValue} = formStore((state) => ({
      storeValue:  state[props.label.toLowerCase()],
      setStoreValue: state['set'+props.label],

    }))
    return (
        <>
            <Typography>{props.label}</Typography>
            <TextField
                onChange={(e) => setStoreValue(e.currentTarget.value)}
                defaultValue={storeValue}
            >
            </TextField>
        </>
    )

}

FormComponent.propTypes = {label: PropTypes.string};