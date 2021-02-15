import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  //  Solution 0 -  Fetch products from a list hardcoded
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

  // // Solution 1 - Fetch Products using Async call
  // // Where is data coming from ? I think that might be due axios.get() response .... hence we need { data }
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products') // typeof is Object
  //     console.log(JSON.stringify(data, null, 4))
  //     setProducts(data)
  //   }
  // 
  //   fetchProducts()
  // }, [])

  // Solution 2 - Fetch Products using Redux
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  console.log('productList ----- ' + JSON.stringify(productList, null, 4))
  const { loading, error, products } = productList
  console.log('products ----- ' + JSON.stringify(products, null, 4))

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
