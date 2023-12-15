import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react'
import axios from 'axios';

function Signup() {


    const [formData, setFormData] = useState({
        name: "",
        email:"",
        mobile:null,
        password:"",
        confirm_password:""
    
      })
    
      // console.log(formData);
      const handelSubmit=async (e)=>{
        e.preventDefault();
        console.log('clicked');
        const {name,email,mobile,password,confirm_password}=formData;
        console.log(formData);
    
        if(name==="" || email==="" || password==="" || confirm_password==="" || mobile===null)
        {
         alert("Please enter all Details")
        }
        else{
    
          try {
            const response= await axios.post("https://growv2.onrender.com/verify/signup",formData);
            console.log(response);
            alert("Signup Completed Go to login page")
          } catch (error) {
            console.log(error)
          }
            
        }
    
      }
  return (
    <Box maxW="480px" m="auto" border='1px' borderColor='gray.200' p="30px">
 
     <h1>Signup</h1>
     <form>
       <FormControl mb="20px">
        <FormLabel>Full Name</FormLabel>
        <Input type='name' placeholder='Enter your full name' onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
       </FormControl>


       <FormControl mb="20px">
        <FormLabel>Email</FormLabel>
        <Input type='text' placeholder='Enter Your Email' onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
       </FormControl>

       <FormControl mb="20px">
        <FormLabel>Mobile No.</FormLabel>
        <Input type='text' placeholder='Enter Location' onChange={(e)=>setFormData({...formData,mobile:e.target.value})}/>
       </FormControl>

       <FormControl mb="20px" >
        <FormLabel>Password</FormLabel>
        <Input type='text'  placeholder='Enter Password' onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
       </FormControl>

       <FormControl mb="20px">
        <FormLabel>Confirm Password</FormLabel>
        <Input type='text' placeholder='Enter Confirm Password' onChange={(e)=>setFormData({...formData,confirm_password:e.target.value})}/>
       </FormControl>

       <Button onClick={handelSubmit}>Signup</Button>
     </form>
     </Box>
  )
}

export default Signup
