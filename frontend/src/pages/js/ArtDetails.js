// src/pages/ArtDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ArtDetails.css';

function ArtDetails() {
  const { id } = useParams();
  
  // Mock data for demonstration
  const art = { id, title: 'Sunset Over the Mountains', description: 'A beautiful painting of a sunset.', imageUrl: '/images/art1.jpg' };

  return (
    <div className="art-details">
      <img src={art.imageUrl} alt={art.title} />
      <h1>{art.title}</h1>
      <p>{art.description}</p>
    </div>
  );
}

export default ArtDetails;
