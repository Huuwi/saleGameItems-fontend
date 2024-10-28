import { io } from "socket.io-client"

export const socket = io(import.meta.env.VITE_BACKEND_URL_SOCKET, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
})