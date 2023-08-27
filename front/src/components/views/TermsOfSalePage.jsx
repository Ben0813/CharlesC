import React from "react";

const TermsOfSalePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">
          Conditions Générales de Vente
        </h1>

        <div className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl mb-4 text-gray-900">
            Séances photo
          </h2>
          <p className="text-gray-700 mb-4">
            Toutes les séances photo doivent être payées à l'avance. Les
            annulations doivent être effectuées au moins 48 heures à l'avance
            pour un remboursement complet.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">
            Photos imprimées
          </h2>
          <p className="text-gray-700 mb-4">
            Les photos imprimées sont couvertes par une garantie de qualité de 6
            mois. Si un défaut est détecté pendant cette période, nous les
            remplaçons gratuitement.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">
            Livraison
          </h2>
          <p className="text-gray-700 mb-4">
            Les délais de livraison sont donnés à titre indicatif. En cas de
            retard, cela ne donne pas droit à une annulation de commande ou à
            des dommages et intérêts.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">
            Droits d'utilisation
          </h2>
          <p className="text-gray-700 mb-4">
            Les photos prises peuvent être utilisées par le photographe à des
            fins de promotion, sauf accord contraire écrit et signé par les deux
            parties. Les clients ont le droit d'utiliser les photos pour un
            usage personnel et non commercial.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">
            Réclamations
          </h2>
          <p className="text-gray-700">
            Pour toute réclamation, veuillez nous contacter via notre formulaire
            de contact ou à l'adresse e-mail suivante : info@charlescantin.com
            dans un délai de 15 jours après la livraison. Passé ce délai, aucune
            réclamation ne sera acceptée.
          </p>

          <p className="text-gray-700 mt-4">Mise à jour le 27 aout 2023</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfSalePage;
