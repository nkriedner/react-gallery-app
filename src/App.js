import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";
import React from "react";

const photos = [
    {
        id: 1,
        src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    },
    {
        src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        id: 2,
    },
    {
        src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
        id: 3,
    },
    {
        src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
        id: 4,
    },
];
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            fetchedData: false,
        };
    }

    componentDidMount() {
        // Flickr Endpoint: https:/api.flickr.com/services
        const key = apiKey.key;
        // console.log("key:", key);
        // console.log(typeof key);

        const data = {
            method: "flickr.photos.search",
            api_key: key,
            text: "cat", // search text
            // format: "json",
            tags: "cat",
            per_page: 12,
            // sort: "interestingness-desc",
            // license: "4"
        };
        const parameters = new URLSearchParams(data);
        // console.log("parameters:", parameters);
        const url = `https://api.flickr.com/services/rest/?${parameters}&format=json&nojsoncallback=1`;
        // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api`
        // console.log("url:", url);

        axios
            .get(
                // "https://www.flickr.com//services/rest/?method=flickr.test.echo&name=value"
                // `https://www.flickr.com//services/rest/?method=flickr.photos.search&api_key=${key}`
                url
            )
            .then((response) => {
                this.setState({
                    images: response.data.photos.photo,
                    fetchedData: true,
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
                    <SearchForm />
                    <Nav />
                    <PhotoContainer
                        photos={photos}
                        images={this.state.images}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

/*
function App() {
    // console.log(apiKey);
    

    const photos = [
        {
            id: 1,
            src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
        },
        {
            src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
            id: 2,
        },
        {
            src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
            id: 3,
        },
        {
            src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
            id: 4,
        },
    ];

    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />
                <Nav />
                <PhotoContainer photos={photos} />
            </div>
        </BrowserRouter>
    );
}

export default App;
*/
