import React from 'react'
import {connect} from 'react-redux'
import './singleCartItem.css'

const singleCartItem = props => {
  const {items, removeItem, subQuantity, addQuantity, orderId} = props
  let currQuantity
  return (
    <div>
      {items
        ? items.map(item => {
            item.cart
              ? (currQuantity = item.cart.quantity)
              : (currQuantity = null)
            return (
              <div className="cart-container" key={item.id}>
                <div className="cart-details">
                  <div>
                    <img src={item.imageURL} />{' '}
                  </div>
                  <div>
                    <p>
                      {' '}
                      <b>Name:</b> {item.name}
                    </p>
                    <p>
                      {' '}
                      <b>Color:</b> {item.color}
                    </p>
                    <p>
                      {' '}
                      <b>Price:</b> ${item.price}
                    </p>
                    <p>
                      {' '}
                      <b>Size:</b> {item.size} ml{' '}
                    </p>
                    <div className="cart-btns">
                      <div>
                        <button
                          id="minus-quantity-btn"
                          type="submit"
                          onClick={() => {
                            subQuantity(item.id, orderId, item.price)
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <button
                          id="plus-quantity-btn"
                          type="submit"
                          onClick={() => {
                            addQuantity(item.id, orderId, item.price)
                            currQuantity++
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          id="delete-item-btn"
                          type="submit"
                          onClick={() => removeItem(item.id, orderId)}
                        >
                          Delete item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : ''}
    </div>
  )
}

const mapState = state => {
  return {
    // items: state.cart.items
  }
}

export default connect(mapState)(singleCartItem)
