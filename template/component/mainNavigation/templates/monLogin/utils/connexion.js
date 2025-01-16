import axios from 'axios'
//const url = 'http://localhost:8083/connexion'
const url = 'https://kilo-kello-4d8ce17ec2a1.herokuapp.com/connexion'
const connexion = async (email, motdepasse) => {

    const connexion = await axios.post(url,{email,motdepasse})

    console.log('coooonexion ::',connexion)

    return connexion.data.message;


}

export default connexion