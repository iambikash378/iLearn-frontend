import axios from 'axios';

export const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
});

export const user = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URI}/user`,
});
