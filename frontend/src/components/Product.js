import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded text-white bg-primary'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='text-danger'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as='div' className='text-info'>
            <strong>{product.name} LinkContainer</strong>
          </Card.Title>
        </LinkContainer>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
