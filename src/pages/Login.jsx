import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [formData, setFormData] = useState({
        email:"",
        password:"",
      })

    const {providerState}=useContext(AuthContext);
    const navigate=useNavigate();
    
      // console.log(formData);
      const handelSubmit=async (e)=>{
        e.preventDefault();
        console.log('clicked');
        const {email,password}=formData;
        console.log(formData);
    
        if( email==="" || password==="" )
        {
         alert("Please enter all Details")
        }
        else{
    
          try {
            const response= await axios.post("https://growv2.onrender.com/verify/login",formData);
            console.log(response.data.token);
            if(response.data.token)
            {
                providerState.login(response.data.token);
                localStorage.setItem("token",response.data.token)
            }
            alert("Login Successfull")
          } catch (error) {
            console.log(error)
          }
            
        }
    
      }

      if(providerState.state.isAuth)
      {
        return<Navigate to="/profile"/>
      }
  return (
    <Box maxW="480px" m="auto" border='1px' borderColor='gray.200' p="30px">
 
     <h1>Login</h1>
     <form>
       <FormControl mb="20px">
        <FormLabel>Email</FormLabel>
        <Input type='text' placeholder='Enter Your Email' onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
       </FormControl>


       <FormControl mb="20px" >
        <FormLabel>Password</FormLabel>
        <Input type='text'  placeholder='Enter Password' onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
       </FormControl>


       <Button onClick={handelSubmit}>Login</Button>
     </form>
     </Box>
  )
}

export default Login
