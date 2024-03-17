import { useEffect } from "react";
import { api } from "../api";
import useAuth from "./useAuth";
import axios from "axios";

const useAxiosAuthentication = () => {
    const { auth } = useAuth();
    useEffect(() => {

        api.interceptors.request.use(

            (config) => {
                const authToken = auth?.authToken;

                if (authToken) {
                    config.headers.authorization = `Bearer ${authToken}`;
                }

                return config;

            },
            (error) => Promise.reject(error)
        );

        api.interceptors.response.use(

            (response) => response,

            async (error) => {
                const originalRequest = error.config;

                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;


                    try {
                        const refreshToken = auth?.refreshToken;

                        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refreshToken`, { refreshToken })

                        const { token } = response.data;
                        console.log(`new Token : ${token}`);

                        originalRequest.headers.authorization = `Bearer ${token}`;

                        return axios(originalRequest)

                    } catch (error) {
                        throw error;
                    }

                }
                
                // after If Block and under error block of response interceptors.......
                return Promise.reject(error);

            }
        )


    }, []);
}