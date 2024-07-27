import React, {useState} from 'react'

const Table = ({ data }) => {
    const [tableData, setTableData] = useState(data);

    tableData.sort((a, b) => b.name.localeCompare(a.name));


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item)=>(
                    <tr Key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
