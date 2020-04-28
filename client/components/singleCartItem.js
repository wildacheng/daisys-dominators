import React from 'react'

const singleCartItem = props => {
  const {items, removeItem, subQuantity, addQuantity, orderId} = props

  return (
    <div>
      {items.map(item => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.imageURL} />
              <p> Name: {item.name} </p>
              <p> Color: {item.color} </p>
              <p> Price: {item.price} </p>
              <p> Size: {item.size} </p>
            </div>
            <button type="submit" onClick={() => removeItem(item.id, orderId)}>
              Delete item
            </button>
            <button
              type="submit"
              onClick={() => subQuantity(item.id, orderId, item.price)}
            >
              - Quantity
            </button>
            <button
              type="submit"
              onClick={() => addQuantity(item.id, orderId, item.price)}
            >
              + Quantity
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default singleCartItem
