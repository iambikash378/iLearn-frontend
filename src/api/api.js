import axios from 'axios';

export const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
});

export const user = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URI}/user`,
});

export const filter = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URI}/filters`,
});

export const courses = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URI}/courses`,
});