import React, { useState, useEffect } from "react";
import axios from "axios";

const GaleriePage = () => {
  // Scroll to top of page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State variables for photos, all photos and filter
  const [photos, setPhotos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [filter, setFilter] = useState("Toutes");

  // Fetch photos from API on component mount
  useEffect(() => {
    const WP_API_URL = `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/wp-json/wp/v2/media?_embed&per_page=100`;

    axios
      .get(WP_API_URL)
      .then((response) => {
        const photoData = response.data.map((item) => {
          let categorySlug = ""; // default value

          // Check if the required data exists before accessing it
          if (
            item._embedded &&
            item._embedded["wp:term"] &&
            item._embedded["wp:term"][0] &&
            item._embedded["wp:term"][0][0] &&
            item._embedded["wp:term"][0][0].slug
          ) {
            categorySlug = item._embedded["wp:term"][0][0].slug;
          }

          // Return photo data with URL, title and category
          return {
            Url: item.source_url,
            Titre: item.title.rendered,
            Category: categorySlug,
          };
        });
        // Shuffle the array of photos and set it to allPhotos state
        setAllPhotos(shuffleArray(photoData));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des photographies:",
          error
        );
      });
  }, []);

  // Update photos state when filter or allPhotos state changes
  useEffect(() => {
    if (filter === "Toutes") {
      setPhotos(allPhotos);
    } else {
      setPhotos(
        allPhotos.filter((photo) => photo.Category === filter.toLowerCase())
      );
    }
  }, [filter, allPhotos]);

  // Function to shuffle an array
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

  // Render the component
  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">
          Découvrez mes dernières photos
        </h1>
        <div className="mb-4 flex flex-wrap justify-center">
          {[
            "Toutes",
            "Mariage",
            "Grossesse",
            "Bebe",
            "Famille",
            "Bapteme",
            "Couple",
            "Portrait",
          ].map((cat) => (
            // Button for each category
            <button
              key={cat}
              className={`mx-2 my-1 p-2 rounded ${
                filter === cat
                  ? "bg-gray-200 text-gray-900"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            // Display each photo
            <div
              key={index}
              className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full relative group"
            >
              {photo.Url && (
                <img
                  src={photo.Url}
                  alt={photo.Titre}
                  className="w-full h-56 object-cover rounded-lg mb-2"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
                <span className="font-display text-xl text-white">
                  {photo.Titre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriePage;