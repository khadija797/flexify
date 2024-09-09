import React, { useState } from 'react'
import './Home.css'
import Header from '../../header/Header'
import ExploreMenu from '../../explore-menu/ExploreMenu'
import AppDownload from '../../app-download/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <AppDownload />

    </div>
  )
}

export default Home
