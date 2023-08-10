import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Juste moi",
      price: "130 €",
      description: "Séance pour une personne, en extérieur ou en studio",
    },
    {
      title: "Pour deux",
      price: "195 €",
      description: "Pour deux personnes, en extérieur ou en studio",
    },
    {
      title: "Famille",
      price: "220 €",
      description: "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio. 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)",
    },
    {
      title: "Il était une fois",
      price: "160 €",
      description: "Photo de grossesse (À votre domicile, en extérieur ou en studio)",
    },
    {
      title: "Mon bébé",
      price: "100 €",
      description: "Photo d’enfant jusqu’à 3 ans (photo à domicile)",
    },
    {
      title: "J’immortalise l’événement",
      price: "sur mesure",
      description: "Prestation de mariage ou baptême sur devis",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-display mb-4 text-center text-gray-800">Tarifs et Prestations</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full">
              <h2 className="font-display text-2xl mb-2 text-gray-900">{service.title}</h2>
              <p className="text-xl font-bold mb-4 text-gray-800">{service.price}</p>
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

