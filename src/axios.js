import axios from "axios"

//URL para realizar solicitudes a la base de datos de películas 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;