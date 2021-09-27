import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";

export default class PhotoContainer extends React.Component {
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {this.props.images.map((photo) => {
                        return (
                            <Photo
                                url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                                key={photo.id}
                            />
                        );
                    })}

                    <NotFound />
                </ul>
            </div>
        );
    }
}
