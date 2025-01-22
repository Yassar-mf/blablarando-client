import axios from 'axios'
//const url = 'http://localhost:8083/connexion'
import urls from '../../../../../Constants/urls'
const uurl = urls.prod;
const uuurl = `${uurl}/connexion`
console.log(`urleee : ${uurl}`);
const url = 'https://kilo-kello-4d8ce17ec2a1.herokuapp.com/connexion'
const connexion = async (email, motdepasse) => {

    const connexion = await axios.post(uuurl,{email,motdepasse})

    console.log('coooonexion ::',connexion)

    return connexion.data.message;


}

export default connexion