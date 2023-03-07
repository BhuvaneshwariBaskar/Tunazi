
import React,{useState,useEffect} from 'react'
const { Hello } = require("../axios/user.axios");
// import axios from "axios"

const Helo=()=> {
const [data, setData] = useState('')
useEffect(() => {
  // const res= axios.get("http://localhost:8000/api/hi").then((response)=>{
  //   console.log(response)
  //   setData(response.data)
  // })
 
  Hello().then((res)=>{
    console.log(res)
    setData(res.data)
  })
}, [data])


  return (
    <div>{data}</div>
  )
}

export default Helo