import React, { useState, useEffect } from "react";
import PageVide from "./Views/pageVide";
import ListeVendeurs from "./Views/listeDesVendeurs";
import obtenirListeVente from './utils/obtenirListeVentes'
const App = ({ navigation, route }) => {
  const email = route.params ? route.params.monEmail : ''

  const [listeVente, setListeVente] = useState([]);

  useEffect(()=>{
    const listeV = async () => {
      const lVente = await obtenirListeVente()
      setListeVente(lVente)
    }
    listeV()
  },[])
  
  return (
    <>
      {listeVente.length > 0 ? (
        <ListeVendeurs
          email={email}
          listeVente={listeVente}
          navigation={navigation}
        />
      ) : (
        <PageVide navigation={navigation} />
      )}

    </>
  );
};

export default App;
