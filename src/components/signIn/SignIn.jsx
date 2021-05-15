import React, { Component } from 'react'
import CustomButton from '../customButton/CustomButton'
import FormInput from '../formInput/FormInput'
import './signIn.styles.scss'
import { signInWithGoogle } from '../../firebase/Firebase.utils'

export class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
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


                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>sign in with google</CustomButton>

                </form>

            </div>
        )
    }
}

export default SignIn
