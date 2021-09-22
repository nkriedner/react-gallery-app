import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";

class PhotoContainer extends React.Component {
    render() {
        // const imagesList = this.props.data;
        // if (imagesList.length > 0) {
        //     console.log("imagesList:", imagesList);
        // }
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {this.props.images.map((photo) => {
                        return (
                            <Photo
                                // url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                                url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                                key={photo.id}
                            />
                        );
                    })}

                    {/* <!-- Not Found --> */}
                    <NotFound />
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;
