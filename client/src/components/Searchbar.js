import Axios from "axios";
import React, {useRef, useState} from "react";
//import "./styles.css";

function Searchbar(props) {
    const inputRef = useRef(null);
    console.log(inputRef.current && inputRef.current.value);

    const onClickHandler = (evt) => {
        evt.preventDefault();
        // Make request with search dat to backend
        // /googlebooks?search=something
        Axios.get("/googlebooks", { params: {search: inputRef.current.value}}).then(
            (res) => {
                // We hsold invoke passed down function to set state in APi with new data
                console.log(res.data)
            }
        )
    }
    return (
        <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
            <input ref={inputRef} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Search"></input>
            <button type="submit" onClick={onClickHandler} className="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default Searchbar;