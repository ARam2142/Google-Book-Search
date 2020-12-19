import axios from "axios";
// const API_Key = 'AIzaSyDICvg1AuEgsUWN9vSVLJ0MjImaJp7eT6E';

export default {
    // export function log(error) {
    //     console.log(error);
    // }
    
    //const API = {
        // Gets all books
        getBooks: function () {
            return axios.get("/api/books");
        },
        // Gets the book with the given id
        getBook: function (id) {
            return axios.get("/api/books/" + id);
        },
        // Deletes the book with the given id
        deleteBook: function (id) {
            return axios.delete("/api/books/" + id);
        },
    
        //searches a book
        searchBook: function (booksSearched) {
            console.log(booksSearched);
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${booksSearched}:keyes&${API_Key}`)
        },
        
        //Saves a book to the database
          saveBook: function(bookSaved) {
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSaved}:keyes&${API_Key}`)
          }
    
    };

//}
    //export default API;

