import React from 'react'

const OrderDetails = ({formData}) => {
  return (
    <>
        <h2>Order Details</h2>
        <br />
        <p>Full Name: {formData.firstname + " " + formData.lastname}</p>
        <p>Address: {formData.addressOne}</p>
        <p>Order Type:{formData.orderType}</p>
        <br />
        <h3>Sit back and Enjoy!</h3>
    </>
  )
}

export default OrderDetails