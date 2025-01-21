import React, { createContext } from 'react'
import styles from './index.module.scss'
import Grid from '@mui/material/Grid2';
import { FaHeart } from "react-icons/fa6";
import {Helmet} from "react-helmet";
import { WishlistContext } from '../../context/WishlistContext';

const Wishlist = () => {
  const {wishlist, toggleWishlist} = createContext(WishlistContext)
  
  return (
    <>
    <Helmet>
      <title>Wishlist Page</title>
      <meta name="description" content="Wishlist Page" />
    </Helmet>
  
      <div className={styles["containerr"]}>
        
        <div className={styles["clothes"]}>

          <Grid container spacing={2}>

          { wishlist.length > 0 && wishlist.map((c)=>{
            return(
              <Grid size={3} key={c._id}>
              <div className={styles["card"]}>
                <img className={styles["card-img"]} src={c.image} alt="" />
                <p className={styles["title"]}>{c.title}</p>
                <p className={styles["price"]}>${c.price}</p>
                <div className={styles["fav"]}>
                <FaHeart onClick={()=>{toggleWishlist(c)}}/>
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

export default Wishlist