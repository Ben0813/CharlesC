import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-700 text-white py-6 font-display">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center md:justify-between px-4">
                {/* Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-4 sm:mb-2 md:mb-0">
                    <Link to="/privacy-policy" className="hover:text-gray-400 text-center">
                        Politique de confidentialité
                    </Link>
                    <Link to="/terms-of-service" className="hover:text-gray-400 text-center">
                        Conditions générales de vente
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-center font-display text-sm">
                    &copy; {currentYear} Charles Cantin Photographe. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
