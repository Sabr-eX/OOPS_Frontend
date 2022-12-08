import React from 'react'
import { Link } from 'react-router-dom'
import './Confirmation.css'
import Navbar from './Navbar'

export default function Confirmation() {
  return (
    <div className='main'>
        <Navbar/>
        <h1 className='heading'>
            Thank you for shopping with Shopify!
        </h1>
        <h2 className='heading2'>
            Your Order has been placed successfully!
        </h2>
        <div className='buttons'>
        <Link to='/CustomerHome'>
        <button className='btn btn-primary b1'>Continue Shopping</button>
        </Link>
        <Link to='/'>
        <button className='btn btn-primary b2'>Sign OUt</button>
        </Link>
        <Link to='/order_history'>
        <button className='btn btn-primary b3'>Order Status</button>   
        </Link>
        </div>
    </div>
  )
}
