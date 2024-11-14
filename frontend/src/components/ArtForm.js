import React, { useState } from 'react';
import './ArtForm.css';

function ArtForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArt = { title, description, imageUrl };

    try {
      const response = await fetch('/api/art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArt),
      });
      if (response.ok) {
        console.log('New art added successfully');
        setTitle('');
        setDescription('');
        setImageUrl('');
      }
    } catch (error) {
      console.error('Error adding new art:', error);
    }
  };

  return (
    <div className="art-form">
      <h2>Add New Art</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Add Art</button>
      </form>
    </div>
  );
}

export default ArtForm;
