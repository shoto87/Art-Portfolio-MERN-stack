// frontend/src/pages/ArtDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ArtDetails() {
  const { id } = useParams();
  const [art, setArt] = useState(null);

  useEffect(() => {
    axios.get(`/api/art/${id}`)
      .then(response => setArt(response.data))
      .catch(error => console.error('Error fetching art:', error));
  }, [id]);

  return (
    <div>
      {art ? (
        <div>
          <h1>{art.title}</h1>
          <img src={art.imageUrl} alt={art.title} />
          <p>{art.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ArtDetails;
