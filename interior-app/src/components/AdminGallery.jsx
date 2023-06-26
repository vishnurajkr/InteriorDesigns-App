import React from 'react'
import AXIOS from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function AdminGallery() {

    const [data,setData]=useState([]);
    const imgview =() =>{
        AXIOS.get('http://localhost:9001/viewuploads').then((res)=>{
            console.log(res.data.imgData);
            setData(res.data.imgData);

        })
    }
    useEffect(()=> {
    imgview();
     },[] )
  return (
    <>
    <h1>AdminGallery</h1>
    {data.map((ls)=>{
        return <div className='col-lg-6'> 
            <img src={`http://localhost:9001/`+ls.FILE} alt='gallery-admin' width='200' /> 
        </div>
    })}
    </>
  )
}

export default AdminGallery