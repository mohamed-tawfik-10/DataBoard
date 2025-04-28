import React, { useContext, useEffect } from 'react'
import { PhotosContext } from '../Context/PhotosContect';


export default function Photos() {
      let{getPhotos ,  Photos}=useContext(PhotosContext);
      console.log(Photos);
      
     
    
    useEffect(() => {
      
        getPhotos();
    
    }, [])
    
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Photos?.map((Photo) =>

                <div class="overflow-hidden rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                        src={Photo.thumbnailUrl}
                        alt="Random Photo"
                        class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            </div>


        </>)
}
