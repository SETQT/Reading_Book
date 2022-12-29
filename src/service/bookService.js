import axios from "axios"
import AuthAdmin from "./auth"
import authHeader from "./authHeader"


const API = 'https://ebook4u-server.onrender.com/'


const currentPage = localStorage.getItem('currentPage');

const currentPageSearch = localStorage.getItem('currentPageSearch');


const searchName = localStorage.getItem('searchName');

const searchCategory = localStorage.getItem('searchCategoryPage');

const searchCountry = localStorage.getItem('searchCountryPage');


class BookService {

    deleteBook(id) {
        return axios.delete(API + `api/book/${id}`, { headers: authHeader() })

    }

    deleteComment(id) {
        return axios.delete(API + `admin/comment/${id}`, { headers: authHeader() })

    }
    updateBook(id) {
        // AuthAdmin()

        return axios.put(API + `api/book/${id}`, { headers: authHeader() })

    }
    getAllBook() {
        return axios.get(API + 'api/book/all', { headers: authHeader() })

    }

    getBookById(id) {
        return axios.get(API + `api/book/${id}`, { headers: authHeader() })

    }

    getTopBook(){
        return axios.get(API + `api/book/top/viewed?per=3`, { headers: authHeader() })
    }

    getSummary(){
        return axios.get(API + `api/summary`, { headers: authHeader() })

    }

    getChart(type1, type2){
        return axios.get(API + `api/view?type=${type1}&number=${type2}`, { headers: authHeader() })

    }

    getSearchBook(name) {
        return axios.get(API + `search?q=${name}&category=${searchCategory}&country=${searchCountry}`, { headers: authHeader() })

    }

    getPerChapterBook(id) {
        return axios.get(API + `api/chapter/${id}`, { headers: authHeader() })

    }

    getPage() {
        return axios.get(API + `api/book/page/pagination?per=8&page=${currentPage}`, { headers: authHeader() })

    }
    search(name, type, country) {
        return axios.get(API + `api/book/page/pagination?per=8&page=${currentPage}&q=${name}&category=${type}
        &country=${country}`, { headers: authHeader() })

    }

    getPageSearch() {
        return axios.get(API + `api/book/page/pagination?per=8&page=${currentPageSearch}&q=${searchName}&category=${searchCategory}&country=${searchCountry}`, { headers: authHeader() })

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