// frontend/src/pages/ArtGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArtGallery() {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    axios.get('/api/art')
      .then(response => setArtPieces(response.data))
      .catch(error => console.error('Error fetching art:', error));
  }, []);

  return (
    <div>
      <h1>Art Gallery</h1>
      <div>
        {artPieces.map(art => (
          <div key={art._id}>
            <h2>{art.title}</h2>
            <img src={art.imageUrl} alt={art.title} />
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;
