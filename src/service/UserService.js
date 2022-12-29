import axios from "axios"
import AuthAdmin from "./auth"
import authHeader from "./authHeader"


const API = 'https://ebook4u-server.onrender.com/'

class UserService {

    async getAllAccount() {
        // await AuthAdmin()
        return axios.get(API + 'api/user/all', { headers: authHeader() })

    }


    banAccount(id) {
        // return axios.put(API + `admin/user/${id}/banned`, { headers: authHeader() })
        return fetch(
            `https://ebook4u-server.onrender.com/admin/user/${id}/banned`,
            {
                method: 'PUT',
                // body: formData,
                headers: {

                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzlkNmNlOTFiYTU3MTI4OTdkZDE5MjYiLCJpYXQiOjE2NzE4NTU0MjcsImV4cCI6MTcwMzM5MTQyN30.hpWdcirkiXTiR5WqzjEuoihCbx5mOBjMkr5qVjgj-yY'
                },

            }
        )

    }
    report() {
        return axios.get(API + `admin/report/all`, { headers: authHeader() })

    }
    unbanAccount(id) {
        // return axios.put(API + `admin/user/${id}/unbanned`, { headers: authHeader() })
        return fetch(
            `https://ebook4u-server.onrender.com/admin/user/${id}/unbanned`,
            {
                method: 'PUT',
                // body: formData,
                headers: {

                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzlkNmNlOTFiYTU3MTI4OTdkZDE5MjYiLCJpYXQiOjE2NzE4NTU0MjcsImV4cCI6MTcwMzM5MTQyN30.hpWdcirkiXTiR5WqzjEuoihCbx5mOBjMkr5qVjgj-yY'
                },

            }
        )
    }

    getReport() {
        return axios.get(API + 'admin/report/all', { headers: authHeader() })

    }
    searchUser(name) {
        return axios.get(API + `search/user?q=${name}`, { headers: authHeader() })

    }

    getProfileUser() {
        return axios.get(API + 'user/me', { headers: authHeader() })
    }

    getFavBook() {
        return axios.get(API + 'user/me/favorite-book', { headers: authHeader() })
    }



    getLibrary() {

        return axios.get(API + 'user/me/history', { headers: authHeader() })
    }

    getAllBook() {
        return axios.get(API + 'api/book/all', { headers: authHeader() })

    }


}

export default new UserService();