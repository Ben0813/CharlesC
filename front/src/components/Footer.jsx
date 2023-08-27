import { Link } from "react-router-dom";

// Footer component
const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-6 font-display">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center md:justify-between px-4">
        {/* Links section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-4 sm:mb-2 md:mb-0">
          {/* Privacy policy link */}
          <Link
            to="/privacy-policy"
            className="hover:text-gray-400 text-center"
          >
            Politique de confidentialité
          </Link>
          {/* Terms of sale link */}
          <Link to="/terms-of-sale" className="hover:text-gray-400 text-center">
            Conditions générales de vente
          </Link>
        </div>

        {/* Copyright section */}
        <div className="text-center font-display text-sm">
          {/* Display the current year and copyright notice */}
          &copy; {currentYear} Charles Cantin Photographe. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;