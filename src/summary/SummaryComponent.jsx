import formStore from "../stores/formStore";

export function SummaryComponent(props){
    const {storeValue} = formStore((state) => ({
        storeValue:  state[props.label.toLowerCase()],

    }))
    return (storeValue && (<h3>{`${props.label}: ${storeValue}`}</h3>)

)
}