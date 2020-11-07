import React from 'react';
import SearchBar from "./SearchBar ";
import ProductTable from "./ProductTable";

function FilterableProductTable() {
    return (
        //div는 design요소에 영향을 미칠수 있으니
        <>
            <SearchBar></SearchBar>
            <ProductTable></ProductTable>
        </>
    );
}

export default FilterableProductTable;