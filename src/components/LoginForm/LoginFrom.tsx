import { Icon } from "@iconify/react";
import { Button } from "antd";
import React from 'react';
import { InputField } from "../InputField/InputField";


export const LoginForm = ({ data, setEmail, email, mutate }) => {
    return (
        <div className='w-[442px] flex flex-col'>
            <h2 className='font-medium text-2xl mb-6'>Welcome to Stealth SaaS!</h2>
            <div className='gap-10 flex flex-col'>
                <InputField value={email} onChange={setEmail} />

                <Button disabled={!email} onClick={() => mutate(email)} className='bg-geekblue-600 rounded-sm w-full' type="primary">Continue</Button>

                <div className="flex items-center gap-1 pb-4">
                    <span className="h-[1px] bg-gray-200 w-full"></span>
                    <span>OR</span>
                    <span className="h-[1px] bg-gray-200 w-full"></span>{" "}
                </div>
                <div className="flex gap-4">
                    {data?.data?.social_options?.map((option, i) => (
                        <Button
                            key={i}
                            icon={<Icon icon={option?.icon} />}
                            className="border-geekblue gap-2 flex-1 rounded-sm flex items-center justify-center"
                        >
                            Continue with {option?.name}
                        </Button>
                    ))}
                </div>
            </div>

            <p className='text-sm text-center mt-3'>Already have an account? <a className='text-geekblue-600' href="#">Log In</a></p>
        </div >
    )
}

