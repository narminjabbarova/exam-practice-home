import React, { createContext, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { BASE_URL } from '../../constants/script'
import axios from 'axios'
import Grid from '@mui/material/Grid2';
import { FaRegHeart } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import {Helmet} from "react-helmet";
import { WishlistContext } from '../../context/WishlistContext';




const Home = () => {
  const [clothes, setClothes] = useState([])
  const [clothesCopy, setClothesCopy] = useState([])
  const [search, setSearch] = useState("")

  const toggleWishlist = createContext(WishlistContext)
  

  const getClothes = async () => {
    try {
      const res = await axios(`${BASE_URL}/products`)
      setClothes(res.data)
      setClothesCopy(res.data)

      setClothes(res.data)
    } catch (error) {
      console.log(error);

    }
  }

  const filteredClothes = clothes.filter((c)=>c.title.toLowerCase().includes(search.toLowerCase().trim()))

  
  useEffect(() => {
    getClothes()
  }, [])

  const handleSort = (e)=>{
    let sortedClothes = null
    if(e.target.value === "asc"){
      sortedClothes = [...clothes].toSorted((a,b)=> a.price - b.price)
    } else if(e.target.value === "desc"){
      sortedClothes = [...clothes].toSorted((a,b)=> b.price - a.price)
    }
    else{
      sortedClothes = [...clothesCopy]
    }
    setClothes(sortedClothes)
  }


  return (
    <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Home Page" />

    </Helmet>
      <div className={styles["container"]}>
        <div className={styles["texts"]}>
          <h3>Women Collection 2018</h3>
          <h2>NEW SEASON</h2>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className={styles["containerr"]}>
        <div className={styles["search"]}>
        <TextField id="standard-basic" label="Search" variant="standard" onChange={(e)=>{setSearch(e.target.value)}}/>

        <select name="Sort" id="" onChange={handleSort}>
          <option value="asc"> ASC</option>
          <option value="desc"> DESC</option>
          <option value="default"> DEFAULT</option>
        </select>
        </div>
        <h1>Product Overview</h1>

        <div className={styles["clothes"]}>

          <Grid container spacing={2}>

          { clothes.length > 0 && filteredClothes.map((c)=>{
            return(
              <Grid size={3} key={c._id}>
              <div className={styles["card"]}>
                <img className={styles["card-img"]} src={c.image} alt="" />
                <p className={styles["title"]}>{c.title}</p>
                <p className={styles["price"]}>${c.price}</p>
                <div className={styles["fav"]}>
                <FaRegHeart onClick={()=>{toggleWishlist(c)}}/>
                </div>
              </div>     
            </Grid>
            )
          })}

          </Grid>
        </div>

      </div>
    </>
  )
}

export default Home