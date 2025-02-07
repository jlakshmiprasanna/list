import Table from "../../custom_components/Table/Table"
import { staffData } from "../../Data/staffData"

const Staff = () => {
    return (
        <>
            <h1>Staff Data :- </h1>
            <Table headings={Object.keys(staffData[0])} data={staffData} />
        </>
    )
}

export default Staff