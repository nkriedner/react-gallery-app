import NotFound from "./NotFound";
import Photo from "./Photo";

const PhotoContainer = (props) => (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {props.photos.map((photo) => {
                return <Photo url={photo.src} />;
            })}

            {/* <!-- Not Found --> */}
            <NotFound />
        </ul>
    </div>
);

export default PhotoContainer;
