import axios from 'axios'
//const url = "https://kilo-kello-4d8ce17ec2a1.herokuapp.com/inscription"
const url = "https://blablarando.replit.app/inscription"
const postInscription = async (mData) => {
    const data = {
        prenom: mData.prenom,
        nom: mData.nom,
        email: mData.email,
        motdepasse: mData.motdepasse,
        genre: mData.selectedGenre,
        telephone: mData.telephone,
        adresse: {
            rue: `${mData.rue}, ${mData.codePostale}`,
            ville: mData.ville,
            etat: mData.pays
        },
        note:"0.0",
        badge:"débutant",
        description: mData.description,
    }
    console.log('onnées à envoyer :',data)
    const response = axios.post(url,data)

    return response;

}

export default postInscription