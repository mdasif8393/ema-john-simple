import React from 'react';
import fakeData from '../../fakeData';
import './ProductDetail'
import { useParams} from 'react-router-dom';
import Product from '../Product/Product';
const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>{productKey} Details Coming Sooooonnnn.</h1>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;