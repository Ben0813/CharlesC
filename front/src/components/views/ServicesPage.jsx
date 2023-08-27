import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

// Define the ServicesPage component
const ServicesPage = () => {
  // Scroll to top of page on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize services state
  const [services, setServices] = useState([]);

  // Fetch services data on component mount
  useEffect(() => {
    // Define the API URL
    const WP_API_URL = `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/wp-json/wp/v2/posts?categories=3&_embed`;

    // Make a GET request to the API
    axios
      .get(WP_API_URL)
      .then((response) => {
        // Map the response data to include tags
        const serviceData = response.data.map((item) => {
          const tags = item._embedded["wp:term"][1]
            .map((tag) => tag.name)
            .join(", ");

          return {
            ...item,
            tags: tags,
          };
        });
        // Update the services state
        setServices(serviceData);
      })
      .catch((error) => {
        // Log any errors
        console.error("Erreur lors de la récupération des services:", error);
      });
  }, []);

  // Render the component
  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">
          Tarifs et Prestations
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over the services state and render each service */}
            {services.map((service) => {
              // Sanitize the content before rendering for prevent XSS attacks
              const cleanHTML = DOMPurify.sanitize(service.content.rendered);
              return (
                <div
                  key={service.id}
                  className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full"
                >
                  <h2 className="font-display text-2xl mb-2 text-gray-900">
                    {service.title.rendered}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.tags}</p>
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: cleanHTML }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
