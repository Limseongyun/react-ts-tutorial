import React from 'react';
interface Props{
    keyword: string;
    setKeyword: any;
    stockChecked: boolean;
    setStockChecked: any;
}
const SearchBar: React.FC<Props> = ({keyword,setKeyword,stockChecked,setStockChecked}) => {
    return (
        <>
            <input placeholder="Search..." value={keyword} onChange={(e) => setKeyword(e.target.value)}/><br />
            <input type="checkbox" checked={stockChecked} onChange={(e) => setStockChecked(e.target.checked)}/>Only show products in stock
        </>
    );
}

export default SearchBar;