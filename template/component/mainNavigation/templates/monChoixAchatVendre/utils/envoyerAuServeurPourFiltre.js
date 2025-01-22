import axios from 'axios';
import goPagePrincipaleFiltre from './goPagePrincipaleFiltre';
//const url = process.env.URL_PROD

const url = `https://blablarando.replit.app/listeParFiltre`

const envoyerAuServeurPourFiltre = async (kilo, prixMax, dateTime,navigation) => {

    const newDate = new Date(dateTime.heure);

    const localDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000);
    console.log(localDate.toISOString()); // Corrige le décalage horaire


    
    const filtreage =  {
            kilo: kilo,
            prixMax: prixMax,
            dateHeure: localDate.toISOString()
        };

    console.log('filtreage :',filtreage)

    try {

        const response = await axios.post(url,filtreage);
        const liste = response.data;


        goPagePrincipaleFiltre(liste,navigation)
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi au serveur:', error);
        throw error;
    }
};

export default envoyerAuServeurPourFiltre;