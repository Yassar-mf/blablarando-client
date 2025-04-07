import React,{useState} from 'react'

import {ScrollView,View,Pressable,Text} from 'react-native'
import MonListeCustomInput from './templates/listeCustomInput'
const MonFormulaire = ({ route }) => {

  const mRoute = route ? route.params : {nom:"",prenom:"",monEmail:"",tel:"",adresse:"",ville:"",code_postal:""}
  const defaultData = {nom:"",prenom:"",email:""};
   const [lieuRandonnee, setLieuRandonnee] = useState("")
   const [nom,setNom] = useState(route.params.nom ? route.params.nom : "")
   const [prenom,setPrenom] = useState(route.params ? route.params.prenom : "")
   const [adresse,setAdresse] = useState("")
   const [email,setEmail] = useState(route.params ? route.params.monEmail : defaultData)
   const [telephone,setTelephone] = useState("+12 345 67 89 10")
   const [dateDeDepart,setDateDeDepart] = useState(new Date(Date.now()))
   const [nbPlace, setNbPlace] = useState("1")
   const [prixUnitaire,setPrixUnitaire] = useState(10)
   const [nbPourPlaceGros,setNbPourPlaceGros] = useState("2")
   const [prixEnGros,setPrixEnGros] = useState(15)
   const [selectedButtons, setSelectedButtons] = useState({});

   return(
     <View>
        <MonListeCustomInput 
          nom={nom} 
          setNom={setNom}
          prenom={prenom}
          setPrenom= {setPrenom}
          adresse={adresse}
          setAdresse={setAdresse}
          email= {email}
          setEmail={setEmail}
          telephone= {telephone}
          setTelephone={setTelephone}
          dateDeDepart= {dateDeDepart}
          setDateDeDepart={setDateDeDepart}
          nbPlace= {nbPlace}
          setNbPlace={setNbPlace}
          prixUnitaire= {prixUnitaire}
          setPrixUnitaire= {setPrixUnitaire}
          nbPourPlaceGros= {nbPourPlaceGros}
          setNbPourPlaceGros= {setNbPourPlaceGros}
          prixEnGros= {prixEnGros}
          setPrixEnGros= {setPrixEnGros}
          selectedButtons= {selectedButtons}
          setSelectedButtons= {setSelectedButtons}
          lieuRandonnee= {lieuRandonnee}
          setLieuRandonnee= {setLieuRandonnee}
        />
     </View>
   )

}

export default MonFormulaire;