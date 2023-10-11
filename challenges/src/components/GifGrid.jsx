import React, { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../Helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const fetchedImages = await getGifs(category);
            setImages(fetchedImages);
        };
        getImages();
    }, [category]);

    return (
        <>
            <div className="category-title">{category}</div> { }
            <div className="card-grid">
                {images.map((image, key) => (
                    <GifItem key={key} {...image}></GifItem>
                ))}
            </div>
        </>
    );
    
};
