import React from 'react'

const TableHeader = ({headerFields}) => {
    if(headerFields){
        return (
            <tr>
                {React.Children.toArray(headerFields.map(h=><th>{h}</th>))}
            </tr> 
        )
    }
    return null;
}
export default TableHeader;