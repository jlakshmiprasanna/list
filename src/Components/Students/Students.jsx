import Table from "../../custom_components/Table/Table"
import { studentData } from "../../Data/studentData"

const Students = () => {
    return (
        <>
            <h1>Students Data :- </h1>
            <Table headings={Object.keys(studentData[0])} data={studentData} />
        </>
    )
}

export default Students