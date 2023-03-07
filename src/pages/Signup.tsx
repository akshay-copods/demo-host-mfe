import { Icon } from "@iconify/react";
import { notification } from "antd";
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import { LandingPageBanner, LoginForm } from '../components';
import Copyright from "../components/Copyright/Copyright";
const toastType = {
    error: {
        icon: 'ic:round-error',
        class: 'text-red-600'
    },
    success: { icon: 'mdi:success-circle', class: 'text-green-400' }
}
const fetchSignupOptions = async () => {
    const res = await fetch("http://localhost:5381/v1/GetSignupOptions");
    return res.json();
};

const socialLogin = async (name) => {
    console.log(name, 'is starting')
}

const createUser = async (data: { email: string }) => {
    const response2 = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
        }),
    })

    return response2;
};

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (message: string, type: { icon: string, class: string }) => {
        api.success({
            icon: <Icon icon={type.icon} className={type.class} />,
            message,
            placement: "top",
            duration: 2,
        });
    };
    const { data } = useQuery('options', fetchSignupOptions)


    const { mutate, isLoading } = useMutation(createUser, {
        onSuccess: async data => {
            const message = "success"
            data.status === 200 && openNotification('Signed up Successfully', toastType.success)
            data.status === 400 && openNotification("there was an error", toastType.error)
            const response = await data.json()
            localStorage.setItem('id', response.id)
            navigate('on-boarding', { replace: true })


        },
        onError: () => {
            openNotification("there was an error", toastType.error)
        },
    });
    return (
        <div className='flex h-full'>
            {contextHolder}
            <LandingPageBanner />
            <div className='flex flex-col flex-1 items-center justify-center'>
                <LoginForm socialLogin={socialLogin} data={data} email={email} mutate={mutate} setEmail={setEmail} />
                <Copyright />
            </div>
        </div>
    )
}

export default Signup
