import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GaleriePage() {
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1337/api/photographies')
        .then(response => {
            const photoData = response.data.data.map(item => item.attributes);
            setPhotos(photoData);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des photographies:", error);
        });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-700">Galerie</h1>
        <div className="mb-4">
          {['Toutes', 'Mariage', 'Grossesse', 'Bebe', 'Famille', 'Bapteme', 'Couple', 'Portrait'].map(cat => (
            <button
              key={cat}
              className={`mr-2 p-2 ${filter === cat ? 'bg-gray-200 text-white' : 'bg-gray-700'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.filter(photo => (filter === 'Toutes' || filter === '') ? true : photo.Categorie === filter).map((photo, index) => (
            <div key={index} className="relative group">
              {photo.Url && 
                <img 
                  src={photo.Url} 
                  alt={photo.Titre} 
                  className="w-full h-56 object-cover rounded-lg shadow-md bg-gray-700"
                />
              }
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <span className="font-display text-xl text-gray-700">{photo.Titre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GaleriePage;
