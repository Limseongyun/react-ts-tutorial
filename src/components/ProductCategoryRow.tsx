import React from 'react';
interface  Props{
    category: string
}

const ProductCategoryRow: React.FC<Props> = (props) => {
    return (
        <tr>
            <th colSpan={2}>Sporting Goods</th>
        </tr>
    );
}

export default ProductCategoryRow;