import React, { Component } from 'react'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import './signIn.styles.scss'
import {auth, signInWithGoogle } from '../../firebase/Firebase.utils'

export class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = this.state

        try{

            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log(error)
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />


                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn
