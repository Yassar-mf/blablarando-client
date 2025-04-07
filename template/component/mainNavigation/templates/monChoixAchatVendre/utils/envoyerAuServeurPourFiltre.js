import axios from 'axios';
import goPagePrincipaleFiltre from './goPagePrincipaleFiltre';
//const url = process.env.URL_PROD

const url = `https://blablarando.replit.app/listeParFiltre`

<<<<<<< HEAD
const envoyerAuServeurPourFiltre = async (kilo, prixMax, dateTime,navigation) => {
=======
const envoyerAuServeurPourFiltre = async (kilo, prixMax, dateTime,navigation,listeFiltree, 
                                          setListeFiltree,setShowMessageVide) => {
>>>>>>> 3da4c8d (repush)

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

<<<<<<< HEAD

        goPagePrincipaleFiltre(liste,navigation)
=======
        setListeFiltree(liste)
        
        console.log('youhouhjkkjl lljkjhdfq :',liste)
        console.log('youhouhjkkjl')
        setShowMessageVide(true)
        //goPagePrincipaleFiltre(liste,navigation)
>>>>>>> 3da4c8d (repush)
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi au serveur:', error);
        throw error;
    }
};

export default envoyerAuServeurPourFiltre;