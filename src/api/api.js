import axios from "axios";

export const api = axios.create({
    baseURL: "https://bejewled-dog-aquarius.glitch.me"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}