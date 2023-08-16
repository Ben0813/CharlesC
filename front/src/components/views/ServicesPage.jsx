import React, { useState, useEffect } from "react";
import axios from "axios";

const ServicesPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [services, setServices] = useState([]);

  // Fetches the list of services from the API and sets the state with the data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/services`)
      .then((response) => {
        const serviceData = response.data.data.map((item) => ({
          ...item.attributes,
          id: item.id,
        }));
        setServices(serviceData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des services:", error);
      });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">
          Tarifs et Prestations
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full"
              >
                <h2 className="font-display text-2xl mb-2 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-xl font-bold mb-4 text-gray-800">
                  {service.price} €
                </p>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
