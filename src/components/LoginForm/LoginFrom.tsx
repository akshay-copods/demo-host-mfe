import { Button } from "antd";
import React from 'react';
import { InputField } from "../InputField/InputField";


export const LoginForm = ({ setEmail, email, mutate }) => {

    return (
        <div className='w-[442px] flex flex-col'>
            <h2 className='font-medium text-2xl mb-6'>Welcome to Stealth SaaS!</h2>
            <div className='gap-10 flex flex-col'>
                <InputField value={email} onChange={setEmail} />

                <Button onClick={() => mutate(email)} className='bg-geekblue-600 rounded-sm w-full' type="primary">Continue</Button>


            </div>

            <p className='text-sm text-center mt-7'>Already have an account? <a className='text-geekblue-600' href="#">Log In</a></p>
        </div>
    )
}

