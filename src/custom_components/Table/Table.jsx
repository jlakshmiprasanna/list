const Table = ({ headings, data }) => {
    console.log(headings)
    console.log(data)
    return (
        <>
            <h1>Table Data :- </h1>
            <table border={10} cellSpacing={1}>
                <thead>
                    <tr>
                        {headings.map((headings, index) => (
                            <>
                                <th key={index}>{headings}</th>
                            </>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index)=>(
                        <>
                            <tr key={row.id}>
                                {headings.map((column,index)=>(
                                    <>
                                        <td>{row[column]}</td>
                                    </>
                                ))}
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table