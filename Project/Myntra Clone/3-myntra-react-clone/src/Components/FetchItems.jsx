import React from 'react'
import { useSelector } from 'react-redux'

const FetchItems = () => {
 const fetchStatus = useSelector((store) => store.fetchStatus)
  return (
    <div>FetchItems</div>
  )
}

export default FetchItems