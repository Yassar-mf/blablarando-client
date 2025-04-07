<<<<<<< HEAD
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
=======
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
>>>>>>> 3da4c8d (repush)
    </>
  );
};

<<<<<<< HEAD


export default App;
=======
export default App;
>>>>>>> 3da4c8d (repush)
