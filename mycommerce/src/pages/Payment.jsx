import React from 'react'

export const Payment = (props) => {
  const { params: { price } } = props.match
  return (
    <div>{price}</div>
  )
}
