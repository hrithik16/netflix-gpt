import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const Browse = () => {
  const email = useSelector((store) => store.user)
  console.log('From Browse',email)
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse