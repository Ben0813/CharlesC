import React from 'react';

function PrivacyPolicyPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-gray-200 min-h-screen pt-28">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-display mb-4 text-center text-gray-800">Politique de Confidentialité</h1>
        
        <div className="p-6 bg-white bg-opacity-80 border rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl mb-4 text-gray-900">Identification de l'entreprise</h2>
          <p className="text-gray-700 mb-4">
            Notre site est dédié à la photographie. Pour toute question ou demande concernant notre politique de confidentialité, veuillez nous contacter via notre formulaire de contact.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Collecte et utilisation des informations</h2>
          <p className="text-gray-700 mb-4">
            Nous ne collectons aucune donnée personnelle sur notre site. Cependant, nous publions des photos sur notre site uniquement si les personnes photographiées ont donné leur accord.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Conservation des données</h2>
          <p className="text-gray-700 mb-4">
            Les photos sont conservées sur notre site aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées. Après cette période, nous nous engageons à supprimer ou anonymiser les photos afin de protéger la vie privée des personnes photographiées.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Partage des données</h2>
          <p className="text-gray-700 mb-4">
            Nous ne vendons, ne louons, ni ne partageons vos photos avec des tiers à des fins commerciales, sauf si nous obtenons votre consentement préalable.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Vos droits</h2>
          <p className="text-gray-700 mb-4">
            Si vous avez été photographié et que vous souhaitez que votre photo soit retirée de notre site, veuillez nous contacter. Nous nous engageons à répondre à votre demande dans les plus brefs délais.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Sécurité des données</h2>
          <p className="text-gray-700 mb-4">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger les photos contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction non autorisée.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Cookies</h2>
          <p className="text-gray-700 mb-4">
            Notre site web n'utilise pas de cookies pour le suivi ou la personnalisation. Cependant, notre site web peut contenir des liens vers des sites tiers qui peuvent utiliser des cookies. Nous vous encourageons à consulter les politiques de confidentialité de ces sites tiers pour comprendre comment ils collectent, utilisent et partagent vos informations.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Modifications de la politique de confidentialité</h2>
          <p className="text-gray-700 mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et sera effective dès sa publication. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
          </p>

          <h2 className="font-display text-2xl mb-4 text-gray-900">Coordonnées</h2>
          <p className="text-gray-700">
            Si vous avez des questions, des préoccupations ou des demandes concernant notre politique de confidentialité, veuillez nous contacter via notre formulaire de contact.
          </p>

          <p className="text-gray-700 mt-4">Mise à jour le 12 aout 2023</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
