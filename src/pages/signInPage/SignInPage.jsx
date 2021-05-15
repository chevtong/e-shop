import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import './signInPage.scss'

function SignInPage() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp/>

        </div>
    )
}

export default SignInPage
