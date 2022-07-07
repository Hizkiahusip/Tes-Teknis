import React from 'react'
import { connect } from 'react-redux';
import { getProducts } from '../redux/product';
import Product from './Product';



const ProductList = () => {
    return (
        <div className="p-3">
            <h5 className='my-3'>Cart (2 items)</h5>
            <Product />
            <Product />
            <Product />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);
