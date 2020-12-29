import React from "react";



export const PhotoItem = props => {

    const { name, author, url } = props.data;

    return (
        <div className="container photo-item">
            
                <img src={url}></img>
                <div className="caption">
                    "{name}"
                </div>
                <div className='author'>
                <span>Photo taken by:</span>
                    {author}
                
                </div>
        </div>
    )
}