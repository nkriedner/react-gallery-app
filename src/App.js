import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import apiKey from "./config";

function App() {
    // console.log(apiKey);

    const photos = [
        {
            src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
        },
        {
            src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        },
        {
            src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
        },
        {
            src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
        },
    ];

    return (
        <div className="container">
            <SearchForm />
            <Nav />
            <PhotoContainer photos={photos} />
        </div>
    );
}

export default App;
