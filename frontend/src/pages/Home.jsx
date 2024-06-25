import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import AppDownload from '../components/AppDownload/AppDownload';


const Home = ({showLogin}) => {
  const [category,setCategory] = useState('All')
  console.log(showLogin,"this is show login")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home