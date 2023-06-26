import React from 'react'
import { useState } from 'react'
import AXIOS from 'axios'

function AdminPage() {

  const [file, setFile] = useState("")
  const [msg,setMsg]=useState("")
  // const submit = async event => {
  //   event.preventDefault()
  // }
  const config ={
    headers:{
      'content-type':'multipart/form-data'
    }
  }
  const img =()=>{
    const formdata=new FormData()
    formdata.append('photo',file)
    AXIOS.post('http://localhost:9001/upload',formdata,config).then((response)=>{
      setMsg(response.data.msg)
    })
  }
  
  return (
    <>
    <div className='col-lg-6'>
    <h2>Upload image here</h2>
      <form>
        <input type='file' name='photo' onChange={(e)=>setFile(e.target.files[0])} className='form-control' />
        <button type='button' onClick={img}>Upload</button>
      </form>
      <h4>{msg}</h4>
    </div>
    </>
  )
}

export default AdminPage