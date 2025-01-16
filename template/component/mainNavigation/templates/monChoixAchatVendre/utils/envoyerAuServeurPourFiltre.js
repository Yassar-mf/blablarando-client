import axios from 'axios';
import goPagePrincipaleFiltre from './goPagePrincipaleFiltre';
//const url = process.env.URL_PROD
const url = `https://blablarando.replit.app/listeParFiltre`

const envoyerAuServeurPourFiltre = async (kilo, prixMax, dateTime,navigation) => {
    const filtreage =  {
            kilo: kilo,
            prixMax: prixMax,
            dateHeure: dateTime
        };

    try {

        const response = await axios.post(url,filtreage);
        const liste = response.data;

        goPagePrincipaleFiltre(liste,navigation)
        //return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi au serveur:', error);
        throw error;
    }
};

export default envoyerAuServeurPourFiltre;