import React from 'react'
import { connect } from 'react-redux';
import { getItems, getCurrency, getTotal, removeFromCart } from '../redux/cart';



const Cart = () => {
    return (
        <div className='row'>
            <div className="card col-md-12 mb-2">
                <div className="my-3">
                    <h5>The total amount of</h5>
                </div>
                <div className="d-flex justify-content-between text-muted">
                    <p>Temporary Amount</p>
                    <p>$52.93</p>
                </div>
                <div className="d-flex justify-content-between text-muted">
                    <p>Shipping</p>
                    <p>gratis</p>
                </div>
                <div className="d-flex justify-content-between border-top py-3">
                    <h6>The total amount of (including VAT)</h6>
                    <h6>$54.99</h6>
                </div>
                <button className='btn btn-primary btn-lg btn-block'>GO TO CHECKOUT</button>
            </div>
            <div className="card col-md-12 text-center p-4">
                <p>Add a discount code</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);