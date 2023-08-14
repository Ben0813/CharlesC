import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GaleriePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [photos, setPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/photographies`)
      .then(response => {
        const photoData = response.data.data.map(item => item.attributes);
        setAllPhotos(photoData);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des photographies:", error);
      });
  }, []);

  useEffect(() => {
    if (filter === 'Toutes' || filter === '') {
      const shuffledPhotos = shuffleArray([...allPhotos]).slice(0, 24);
      setPhotos(shuffledPhotos);
    } else {
      setPhotos(allPhotos.filter(photo => photo.Categorie === filter));
    }
  }, [filter, allPhotos]);

  function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
      const randId = Math.floor(Math.random() * curId);
      curId -= 1;
      const tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">Découvrez mes dernières photos</h1>
        <div className="mb-4 flex flex-wrap justify-center">
          {['Toutes', 'Mariage', 'Grossesse', 'Bebe', 'Famille', 'Bapteme', 'Couple', 'Portrait'].map(cat => (
            <button
              key={cat}
              className={`mx-2 my-1 p-2 rounded ${filter === cat ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 text-white'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full relative group">
              {photo.Url && 
                <img 
                  src={photo.Url} 
                  alt={photo.Titre} 
                  className="w-full h-56 object-cover rounded-lg mb-2"
                />
              }
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
                <span className="font-display text-xl text-white">{photo.Titre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GaleriePage;
