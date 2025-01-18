import React, { useEffect, useState } from 'react';
import donnees from './utils/obtenirListeVentes'
import PageVide from './Views/pageVide'
import  ListeVendeurs from './Views/listeDesVendeurs'

const App = ({ navigation, route }) => {


  const email = route.params ? route.params.monEmail : '' 

  const [listeVente,setListeVente] = useState([])

  useEffect(() => {
  
     const fetchListeVente = async () => {
        try {
          const liste = await donnees()
          setListeVente(liste)
        } catch (error) {
          console.log('eeeeeerrrrrrreeeeeur : ',error)
        }
    }
    fetchListeVente()

  }, [])
  console.log('uudjjdlkJD  LJSQJDlkjdkl é"ééçàçàç 2222')
  return (
    <>
      {listeVente.length > 0 ?
      <ListeVendeurs email={email} listeVente={listeVente} navigation={navigation}/>
      :
      <PageVide navigation={navigation}/>}
    </>
  );
};



export default App;