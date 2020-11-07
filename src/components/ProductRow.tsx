import React from "react";

interface Props {
    name: string;
    price: string;
    stocked: boolean;
}

export const ProductRow: React.FC<Props> = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}