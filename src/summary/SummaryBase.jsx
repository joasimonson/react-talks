import {SummaryComponent} from "./SummaryComponent";

export function SummaryBase(){
    return(
        <>
            <h1>Summary:</h1>
            <SummaryComponent label="Forename"/>
            <SummaryComponent label="Surname"/>
            <SummaryComponent label="Email"/>
            <SummaryComponent label="Phone"/>
            <SummaryComponent label="Query"/>
        </>


    )
}