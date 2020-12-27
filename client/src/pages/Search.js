import react, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron/Jumbotron"
import { Col, Row, Container } from "../components/grid/Grid";
import { Input, FormBtn } from "../components/form/Index";
//import Image from "react-bootstrap/Image"
import List from "../components/list/List";

function Search() {
    //setting the components initial state
    const [bookSearch, setBookSearch] = useState(["sevilla"])
    const [books, setBooks] = useState({});

    //load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.searchBook()
            .then(res =>
                setBooks(res.data)
            )
            //console.log(res.data)
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { value } = event.target;
        setBookSearch({ value })
    };

    //handles submitting component state when user submits form
    function handleFormSubmit(event) {
        event.preventDefault();
        if (books) {
            loadBooks();
            console.log(books);
        }
    }

    function handleBookSubmit(books) {
        if (bookSearch.link && bookSearch.image) {
            API.saveBook({
                title: books.title,
                authors: books.authors,
                description: books.description,
                image: books.imageLinks.thumbnail,
                Link: books.infoLink
            }

            )
                .then(res => loadBooks())
                .catch(err => console.log(err))
        }

    }


    //return info on page
    //render() {
    return (
        <Container fluid>
            <Row>
                <Col size="sm-12">
                    <Jumbotron>
                        <h1>Welcome to Google Books</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <FormBtn
                            //disabled={!(formObject.author && formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </FormBtn>
                    </form>
                </Col>
            </Row>
            <List />

        </Container>
    )

    //}



}

export default Search;