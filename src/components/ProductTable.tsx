import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable() {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <ProductCategoryRow></ProductCategoryRow>
                <ProductRow></ProductRow>
                <ProductRow></ProductRow>
                <ProductRow></ProductRow>
                <ProductCategoryRow></ProductCategoryRow>
                <ProductRow></ProductRow>
                <ProductRow></ProductRow>
                <ProductRow></ProductRow>
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;