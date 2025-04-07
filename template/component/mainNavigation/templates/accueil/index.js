import React, { useState, useEffect } from "react";
import PageVide from "./Views/pageVide";
import ListeVendeurs from "./Views/listeDesVendeurs";
import obtenirListeVente from './utils/obtenirListeVentes'
const App = ({ navigation, route }) => {
  const email = route.params ? route.params.monEmail : ''

  const [listeVente, setListeVente] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chargement, setChargement]= useState(true)

  useEffect(()=>{
    const listeV = async () => {
      const lVente = await obtenirListeVente()
      setListeVente(lVente)
      if(lVente.length > 0){
        setIsLoaded(true)
      }
    }
    listeV()
  },[])
  useEffect(() =>{
    setTimeout(()=>{
      setChargement(false)
    }, 10000)
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
        <PageVide navigation={navigation} isLoaded={isLoaded} chargement={chargement}/>
      )}

    </>
  );
};

export default App;
