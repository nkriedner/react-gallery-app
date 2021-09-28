import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import React from "react";
import apiKey from "./config";

const key = apiKey.key;

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            yogaImages: [],
            treckingImages: [],
            surfingImages: [],
            searchedImages: [],
        };
    }

    componentDidMount() {
        // const key = apiKey.key;
        this.fetchBaseImages();

        const data = {
            method: "flickr.photos.search",
            api_key: key,
            text: "yoga", // search text
            // tags: "yoga",
            per_page: 12,
        };
        const parameters = new URLSearchParams(data);
        const url = `https://api.flickr.com/services/rest/?${parameters}&format=json&nojsoncallback=1`;
        // console.log("url:", url);

        axios
            .get(url)
            .then((response) => {
                this.setState({
                    images: response.data.photos.photo,
                });
                // console.log("images:", response.data.photos.photo);
            })
            .catch((error) => {
                console.log("Error when fetching data from flickr:", error);
            });
    }

    fetchBaseImages = () => {
        Promise.all([
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=yoga&per_page=12&format=json&nojsoncallback=1`
            ),
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=trecking&per_page=12&format=json&nojsoncallback=1`
            ),
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=surfing&per_page=12&format=json&nojsoncallback=1`
            ),
        ])
            .then((responesList) => {
                console.log("responesList:", responesList);
                this.setState({
                    yogaImages: responesList[0].data.photos.photo,
                });
                this.setState({
                    treckingImages: responesList[1].data.photos.photo,
                });
                this.setState({
                    surfingImages: responesList[2].data.photos.photo,
                });
            })
            .catch((error) => {
                console.log("Error when fetching base images:", error);
            });
    };

    // test function for fetching data with parameters
    getImages(url) {
        axios
            .get(url)
            .then((response) => {
                console.log("images:", response.data.photos.photo);
                return response.data.photos.photo;
            })
            .catch((error) => {
                console.log("Error when fetching data from flickr", error);
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
                    <PhotoContainer images={this.state.surfingImages} />
                </div>
            </BrowserRouter>
        );
    }
}
