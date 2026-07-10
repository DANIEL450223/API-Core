import axios from "axios";

const api = axios.create({
    baseURL:
        import.meta.env.VITE_API_URL ||
        "https://proyecto-calculo-degradacion-core.onrender.com",
    timeout: 90000,
});

export default api;