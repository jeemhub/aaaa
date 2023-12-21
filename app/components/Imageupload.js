'use client'
import { useState } from 'react'
export default function Imageupload(){
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setImage(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className='p-8 h-screen w-full'>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
  
        {image && (
          <div>
            <h2 className='text-black'>Selected Image:</h2>
            
            <hr></hr>
            <img
              src={image}
              alt="Selected"
              style={{ maxWidth: '100%', marginTop: '10px' }}
            />
          </div>
        )}
      </div>
    );
}