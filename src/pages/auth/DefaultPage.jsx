import React from 'react'
import HomePage from './HomePage'
import Home from '../profile/FeedPage/Home'

function DefaultPage() {
  return (
    <div>
      {
        localStorage.getItem("token") ? (
            <Home/>
        ):
        (
            <HomePage/>
        )
      }
    </div>
  )
}

export default DefaultPage
