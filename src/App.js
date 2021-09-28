import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";
import React from "react";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
        };
    }

    componentDidMount() {
        const key = apiKey.key;

        const data = {
            method: "flickr.photos.search",
            api_key: key,
            text: "yoga", // search text
            tags: "yoga",
            per_page: 12,
        };
        const parameters = new URLSearchParams(data);
        const url = `https://api.flickr.com/services/rest/?${parameters}&format=json&nojsoncallback=1`;

        axios
            .get(url)
            .then((response) => {
                this.setState({
                    images: response.data.photos.photo,
                });
                console.log("images:", response.data.photos.photo);
            })
            .catch((error) => {
                console.log("Error when fetching data from flickr:", error);
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    {/* <Route path="/search" component={SearchForm} /> */}
                    {/* <Route path="/search" render={() => <SearchForm />} /> */}
                    <SearchForm />
                    <Nav />
                    {/* <Route path="/" /> */}
                    <PhotoContainer images={this.state.images} />
                </div>
            </BrowserRouter>
        );
    }
}
