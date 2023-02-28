import { Icon } from "@iconify/react";
import { notification } from "antd";
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { LandingPageBanner, LoginForm } from '../components';
const toastType = {
    error: {
        icon: 'ic:round-error',
        class: 'text-red-600'
    },
    success: { icon: 'mdi:success-circle', class: 'text-green-400' }
}
const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
};
const createUser = async (data: { email: string }) => {
    const { data: response } = await axios.post('https://dummyjson.com/auth/login', {
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
    }, { headers });
    return response.data;
};
const getLoginOptions = async () => {
    const { data } = await axios.get('http://localhost:3000/api/v1/loginOptions/org/:orgId');
    return data.data;
};
const Signup = () => {
    const { data } = useQuery('create', getLoginOptions);

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

    const { mutate, isLoading } = useMutation(createUser, {
        onSuccess: data => {
            console.log(data);
            const message = "success"
            openNotification('Signed up Successfully', toastType.success)
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
                <LoginForm data={data} email={email} mutate={mutate} setEmail={setEmail} />
            </div>
        </div>
    )
}

export default Signup
