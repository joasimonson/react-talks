import * as PropTypes from "prop-types";
import {TextField, Typography} from "@mui/material";
import formStore from "../stores/formStore";



export function FormComponent(props) {

    const {storeValue, setStoreValue, setRegistered} = formStore((state) => ({
      storeValue:  state[props.label.toLowerCase()],
      setStoreValue: state['set'+props.label],
      setRegistered: state.setRegistered,

    }))
    return (
        <>
            <Typography>{props.label}</Typography>
            <TextField
                onChange={(e) => {
                    setStoreValue(e.currentTarget.value)
                    setRegistered(false)
                }}
                defaultValue={storeValue}
            >
            </TextField>
        </>
    )

}

FormComponent.propTypes = {label: PropTypes.string};