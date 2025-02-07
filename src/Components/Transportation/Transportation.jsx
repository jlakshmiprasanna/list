import Table from "../../custom_components/Table/Table"
import { transportData } from "../../Data/transportation"

const Transportation = () => {
    return (
        <>
            <h1>Transportation Data :- </h1>
            <Table headings={Object.keys(transportData[0])} data={transportData} />
        </>
    )
}

export default Transportation