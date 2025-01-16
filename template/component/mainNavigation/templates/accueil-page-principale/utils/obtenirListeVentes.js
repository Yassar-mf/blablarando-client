import axios from 'axios'

//const url = "http://localhost:8083/listeVente"
const url = "https://kilo-kello-4d8ce17ec2a1.herokuapp.com/listeVente"

const obtenirListeVentes = async () => { 

    const response = await axios.get(url)

    const liste = response.data.liste.map(itm => ({"ventes":itm._doc,"vendeur":itm.vendeur}))

    console.log('listrrrrererazrezfafdsqFe :',liste)

    return liste;

}

export default obtenirListeVentes