import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/grid/Grid";
import { Input, FormBtn } from "../components/form/Index";
//import Image from "react-bootstrap/Image"
import List from "../components/list/List";

function Search() {
    //setting the components initial state
    const [bookSearch, setBookSearch] = useState("sevilla");
    const [books, setBooks] = useState([]);

    //load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, []);

    //loads book information to 
    function loadBooks() {
        API.searchBook(bookSearch)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { value } = event.target;
        setBookSearch( value )
    };

    //handles submitting component state when user submits form
    function handleFormSubmit(event) {
        event.preventDefault();
        if (bookSearch) {
            loadBooks();
            console.log(books);
        }
    }

    function handleBookSubmit(book) {
        if (book.title && book.description) {
            API.saveBook(
                {
                    title: book.title,
                    authors: book.authors,
                    description: book.description,
                    image: book.imageLinks.thumbnail,
                    link: book.infoLink
                }

            )
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }

    }

    //modeled after Hillary Ferraro Google Books app
    //return info on page
    return (
        <>
            <Container>
                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <h1>Welcome to Google Books</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="title"
                                placeholder="keywords"
                            />
                            <FormBtn
                                //disabled={!(formObject.author && formObject.title)}
                                onClick={handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <section>
                <Container fluid>
                    <h2 className="text-center">Search Results</h2>
                    <Row>
                        {books ? books.map((book) => (
                            <List
                                key={book.id}
                                data={book.volumeInfo}
                                // page={"search"}
                                onClick={handleBookSubmit}
                            />
                        ))
                        : null}
                    </Row>
                </Container>
            </section>
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default Search;