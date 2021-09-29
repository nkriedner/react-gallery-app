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
        this.fetchBaseImages();
    }

    fetchBaseImages = () => {
        Promise.all([
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=yoga&per_page=12&format=json&nojsoncallback=1`
            ),
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=trecking&per_page=12&format=json&nojsoncallback=1`
            ),
            axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=surfing&per_page=12&format=json&nojsoncallback=1`
            ),
        ])
            .then((responesList) => {
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

    searchImages = (searchTag) => {
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTag}&per_page=12&format=json&nojsoncallback=1`
            )
            .then((response) => {
                this.setState({
                    searchedImages: response.data.photos.photo,
                });
            });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm />
                    <Nav />
                    {/* <Route path="/" /> */}
                    {/* <PhotoContainer images={this.state.surfingImages} /> */}
                    {/* TEST -> */}
                    <Route
                        path="/yoga"
                        render={() => (
                            <PhotoContainer images={this.state.yogaImages} />
                        )}
                    />
                    <Route
                        path="/trecking"
                        render={() => (
                            <PhotoContainer
                                images={this.state.treckingImages}
                            />
                        )}
                    />
                    <Route
                        path="/surfing"
                        render={() => (
                            <PhotoContainer images={this.state.surfingImages} />
                        )}
                    />
                    <Route
                        path="/search"
                        render={() => (
                            <PhotoContainer
                                images={this.state.searchedImages}
                            />
                        )}
                    />
                    {/* <- TEST */}
                </div>
            </BrowserRouter>
        );
    }
}
