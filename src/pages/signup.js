import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import {useMutation,useApolloClient,gql} from '@apollo/client';
import {SIGNUP_USER} from '../gql/mutation';



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

function SignUpForm (props){
   
    const client = useApolloClient()
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');

    const [signUp,{loading,error}] = useMutation(SIGNUP_USER,{
        onCompleted:data=>{
            localStorage.setItem('token',data.signUp);
            client.writeQuery({
              query:gql`
                query getLoggedIn {
                  isLoggedIn
                }
              `,data:{
                isLoggedIn:true
              }
            })
            props.history.push('/')
        }
    })

    useEffect(()=>{
        document.title = 'Sign Up - Notedly';
    });

    const submitForm = (event)=>{
        event.preventDefault()
        signUp({
            variables:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                username:username,
                password:password
            }
        }).catch(err=>console.log(err));
    }

    return(
    <Wrapper>
    {error&&(<div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                We're sorry we can't create your account
            </div>
            <p>Username taken
            </p>
        </div>)}
    <Form onSubmit={submitForm}>
        <h2 className="ui center aligned icon header">
            Register
        </h2>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" name="firstname" onChange={e=>setFirstName(e.target.value)}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" onChange={e=>setLastName(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required type="text" className="form-control" id="email" name="email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="username">Username</label>
            <input required type="text" className="form-control" id="username" name="username" onChange={e=>setUserName(e.target.value)}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input required type="password" className="form-control" id="password" name="password" onChange={e=>setPassword(e.target.value)}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </Form>
      </Wrapper>
    )


}

export default SignUpForm