import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import {Product} from "../dto/Product";
import _ from "lodash";

interface Props {
    products : Array<Product>
}

const ProductTable: React.FC<Props> = (props) => {
    const category = _.groupBy(props.products, 'category');
    console.log(category);
    const categoryList = [];

    for(let key in category){
        categoryList.push(<ProductCategoryRow category={key} key={key}></ProductCategoryRow>);
        category[key].forEach((item: Product)=>{
            categoryList.push(<ProductRow key={item.name} price={item.price} name={item.name} stocked={item.stocked} ></ProductRow>)
        });
    }

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
                {
                    categoryList
                }
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;