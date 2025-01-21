import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Container from '@mui/material/Container';
import styles from "./index.module.scss"
import axios from 'axios';
import { BASE_URL } from '../../constants/script';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const ClothesSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  image: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
});

const AddProduct = () => {
  const [clothes, setClothes] = useState([])
  
  const getClothes = async () => {
    try {
      const res = await axios(`${BASE_URL}/products`)
      console.log(res.data); 
      setClothes(res.data)
    } catch (error) {
      console.log(error);

    }
  }

  const handledelete = async(id)=>{
    try {
      const res = await axios.delete(`${BASE_URL}/products/${id}`)
      console.log(res);
      if(res.status === 200){
        setClothes([...clothes].filter((q)=>q._id != id))
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
      getClothes()
    }, [])
  
  return(
  <div style={{ marginTop: "120px" }}>

    <Container maxWidth="sm">

      <h1>Add Product</h1>
      <Formik
        initialValues={{
          title: '',
          image: '',
          price: 0,
        }}
        validationSchema={ClothesSchema}
        onSubmit={async (values, {resetForm}) => {
          const res = await axios.post(`${BASE_URL}/products`, values)
          resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <Field name="title" placeholder="Title" />
              {errors.title && touched.title ? (
                <div>{errors.title}</div>
              ) : null}
            </div>

            <div>
              <Field name="image" placeholder="ImageUrl" />
              {errors.image && touched.image ? (
                <div>{errors.image}</div>
              ) : null}
            </div>

            <div>
              <Field name="price" type="number" placeholder="Price" />
              {errors.price && touched.price ?
                <div>{errors.price}</div>
                : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <hr />

      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clothes.length > 0 && clothes.map((c) => (
            <TableRow 
              key={c._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><img src={c.image} alt="" style={{width: "100px"}}/></TableCell>
              <TableCell align="right">{c.title}</TableCell>
              <TableCell align="right">{c.price}</TableCell>
              <TableCell align="right">
                <button onClick={()=>{
                  window.confirm("are u sure to delete the product?") 
                  && handledelete(c._id)}}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </Container>
  </div>
  ) 
  

};
export default AddProduct