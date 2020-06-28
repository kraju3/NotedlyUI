import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useMutation, useApolloClient,gql} from '@apollo/client';


const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;`

const Form = styled.form`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`
const SIGNIN_USER = gql`
mutation signIn($username:String!,$email:String,$password:String!){
    signIn(username:$username,email:$email,password:$password) 
}
`



function SignInForm(props){
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const [signIn,{loading,error}] = useMutation(SIGNIN_USER,{
        onCompleted:data=>{
            localStorage.setItem('token',data.signIn)
            props.history.push('/home')
        }
    })

    const submitForm = (event)=>{
        event.preventDefault()
        signIn({
            variables:{
                username,email,password
            }
        }).catch(err=>console.log(err))
    }

    return(
        <Wrapper>
            <Form onSubmit={submitForm}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" name="email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" onChange={e=>setUserName(e.target.value)}/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
            </Form>
        </Wrapper>
       
    )
}


export default SignInForm