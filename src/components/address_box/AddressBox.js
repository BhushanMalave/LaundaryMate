import React from 'react'
import './AddressBox.css'
const AddressBox = ({number, type , id , name , address}) => {
  return (
    <div className='address-box-container'>
      <div className='address-box-heading1'>
      {number}  <span className='address-box-type-text' >{type}</span> - #{id}
      </div>
      <p className='address-box-heading2'>{name}</p>
      <p className='address-box-address'>{address}</p>
    </div>
  )
}

export default AddressBox
