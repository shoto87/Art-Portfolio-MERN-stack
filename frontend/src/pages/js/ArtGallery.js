import React, { useEffect, useState } from 'react';
import '../css/ArtGallery.css';

function ArtGallery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('/api/art') // This should match your backend route
      .then((res) => res.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="art-gallery">
      <h1>Art Gallery</h1>
      <div className="gallery-grid">
        {artworks.map((art) => (
          <div className="art-card" key={art._id}>
            <img src={art.imageUrl} alt={art.title} />
            <h2>{art.title}</h2>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;
