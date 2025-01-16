import React, { useState, useEffect } from 'react';
import obtenirUtilisateur from './utils/obtenirUtilisateur'
import PageIntScreen from './templates/pageIntermediaire'

const PageIntermediare = ({ navigation, route }) => {
  const [loaded,setLoaded] = useState(false)
  const [utilisateur, setUtilisateur] = useState({});
  useEffect(() => {
    const fetchUtilisateur = async () => {
      const monUtilisateur = await obtenirUtilisateur(route)
      setUtilisateur(monUtilisateur)
      setLoaded(true)
    }
    fetchUtilisateur()
        
  }, [navigation]);

  useEffect(()=>{
    if(loaded == true){
        const timer = setTimeout(() => {
        //navigation.navigate('MonPrincipal', { monEmail: email, url: monUrl });
        
        navigation.navigate('MonPrincipal', { utilisateur, monEmail: utilisateur.email, url: monUrl });
      }, 4000);
      return () => clearTimeout(timer); 
    }
  },[loaded])

  return (
    <PageIntScreen utilisateur={utilisateur} loaded={loaded}/>
  );
}



export default PageIntermediare;