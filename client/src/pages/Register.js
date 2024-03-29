import React from 'react'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import {useNavigate} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import {Logo, FormRow, Alert} from '../components'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember:true,
    // showAlert: false,
    
  }
  // if possible prefer local state
  // global state
  
  function Register() {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)
  
    // global context and useNavigate later
    const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()
    const handleChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      const {name, email, password, isMember} = values
      if (!email || !password || (!isMember && !name)){
        displayAlert()
        return
      }
      const currentUser = {name, email, password}
      if(isMember){
        loginUser(currentUser)
      }else{
        registerUser(currentUser)
      }
      console.log(values)
    }

    useEffect(()=>{
      if(user){
        setTimeout(()=>{
          navigate('/')
        }, 3000)
      }
    }, [user, navigate])

    const toggleMember = ()=>{
        setValues({...values, isMember: !values.isMember})
    }
    return (
      <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo/>
          <h3>{values.isMember? 'Login': 'Register'}</h3>
          {showAlert && <Alert/>}
          {/* name field */}
          {!values.isMember && (         
          <FormRow 
            type= 'text' 
            name = 'name' 
            value = {values.name} 
            handleChange = {handleChange}
           />
           )}
           
  
          
           {/* email field */}
          <FormRow 
            type= 'email' 
            name = 'email' 
            value = {values.email} 
            handleChange = {handleChange}
           />
           {/* password field */}
          <FormRow 
            type= 'password' 
            name = 'password' 
            value = {values.password} 
            handleChange = {handleChange}
           />
  
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            submit
          </button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}

            <button type='button' onClick={toggleMember} className='member-btn'>
                {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </Wrapper>
    )
  }

export default Register