import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const fetchedImages = await getGifs(category);
                setImages(fetchedImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching GIFs:", error);
                setIsLoading(false);
            }
        };

        fetchImages();
    }, [category]);

    return {
        images,
        isLoading,
    };
};
