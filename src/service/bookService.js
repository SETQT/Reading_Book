import axios from "axios"
import authHeader from "./authHeader"


const API = 'https://ebook4u-server.onrender.com/'

class BookService {

    deleteBook(id) {
        return axios.delete(API + `api/book/${id}`, { headers: authHeader() })

    }
    updateBook(id) {
        return axios.put(API + `api/book/${id}`, { headers: authHeader() })

    }
    getAllBook() {
        return axios.get(API + 'api/book/all', { headers: authHeader() })

    }

    getBookById(id) {
        return axios.get(API + `api/book/${id}`, { headers: authHeader() })

    }
    getAllCategory() {
        return axios.get(API + 'api/category/all', { headers: authHeader() })
    }
    getAllCountry() {
        return axios.get(API + 'api/country/all', { headers: authHeader() })
    }

    // getReport() {
    //     return axios.get(API + 'admin/report/all', { headers: authHeader() })

    // }

}

export default new BookService();