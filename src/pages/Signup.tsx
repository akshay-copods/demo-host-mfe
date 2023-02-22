import React from 'react'
import { LandingPageBanner, LoginForm } from '../components'

const Signup = () => {
    return (
        <div className='flex h-full'>
            {/* <button onClick={handleGetReviews}>CLick to mock</button> */}
            <LandingPageBanner />
            <div className='flex flex-col flex-1 items-center justify-center'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Signup
