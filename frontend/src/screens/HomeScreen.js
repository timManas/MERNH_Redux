import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  //   // Make Axios Call to fetch Product
  //   const products = [
  //     {
  //       name: 'Airpods Wireless Bluetooth Headphones',
  //       image: '/images/airpods.jpg',
  //       description:
  //         'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  //       brand: 'Apple',
  //       category: 'Electronics',
  //       price: 89.99,
  //       countInStock: 10,
  //       rating: 4.5,
  //       numReviews: 12,
  //     },
  //   ]

  // Make Dynamic Fetching Calls
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
