import axios from 'axios'
import { baseUrl } from '../../Config/baseURL';
import { StorageManager } from '../StorageManager'

const Api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

Api.interceptors.request.use(async (config: any) => {
    config.headers.Authorization = `Bearer ${await StorageManager.getData(StorageManager.storageKeys.USER_TOKEN)}`
    return config;
})

Api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        return Promise.reject(error);
    })

export { Api }