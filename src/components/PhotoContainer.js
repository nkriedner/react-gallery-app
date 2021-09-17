import NotFound from "./NotFound";
import Photo from "./Photo";

const PhotoContainer = () => (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
            <Photo url="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" />
            <Photo url="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" />
            <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
            <Photo url="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" />
            <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
            <Photo url="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" />
            <Photo url="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" />
            <Photo url="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" />
            <Photo url="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" />

            {/* <!-- Not Found --> */}
            <NotFound />
        </ul>
    </div>
);

export default PhotoContainer;
