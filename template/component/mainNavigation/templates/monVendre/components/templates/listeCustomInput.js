import {View, ScrollView,Dimensions} from 'react-native'
<<<<<<< HEAD
import Vendre from './BouttonVendre'
=======
import Vendre from './BoutonVendre'
>>>>>>> 3da4c8d (repush)
import MonListeEmballageCoffre from './listePackage/listeDesPackages'
import ListeLieuxRandonnee from './ViewLieuRandonnee'
import CustomInput from './CustomInput'
import DateHeurView from './dateHeureView'
<<<<<<< HEAD
const vH = Dimensions.get('window').height
=======
const {width:vW,height:vH} = Dimensions.get('window').height
>>>>>>> 3da4c8d (repush)
const ListeCustomInput = ({nom,setNom,
                           prenom,setPrenom,
                           adresse,setAdresse,
                             email, setEmail,
                             telephone, setTelephone,
                             dateDeDepart, setDateDeDepart,
                             nbPlace, setNbPlace,
                             prixUnitaire, setPrixUnitaire,
                           nbPourPlaceGros,setNbPourPlaceGros,
                           prixEnGros,setPrixEnGros,
                             selectedButtons,setSelectedButtons,
<<<<<<< HEAD
                           
                          lieuRandonnee, setLieuRandonnee}) => {
   return(
     <View style={{height:vH, padding: 8, paddingVertical: 12, paddingBottom:'21%'}}>
=======

                          lieuRandonnee, setLieuRandonnee}) => {
   return(
     <View style={{height:vH, padding: vW*0.003, paddingVertical: vH*0.005, paddingBottom: vH*0.25}}>
>>>>>>> 3da4c8d (repush)
        <ScrollView contentContainerStyle={{flexWrap: 1}}>
          <CustomInput titre={"Nom"} valeur={nom} state={{type:""}} setValeur={setNom}/>
          <CustomInput titre={"Prenom"} valeur={prenom} state={{type:""}} setValeur={setPrenom}/>
          <CustomInput titre={"Adresse"} valeur={adresse} state={{type:""}} setValeur={setAdresse}/>
          <CustomInput titre={"email"} valeur={email} state={{type:"email"}} setValeur={setEmail}/>
          <CustomInput titre={"telephone"} valeur={telephone} state={{type:"numeric"}} setValeur={setTelephone}/>


          <DateHeurView date={dateDeDepart} setDate={setDateDeDepart} />
<<<<<<< HEAD
          
=======

>>>>>>> 3da4c8d (repush)
          <CustomInput titre={"Nombre de place"} valeur={nbPlace} state={{type:"numeric"}} setValeur={setNbPlace}/>
          <CustomInput titre={"Prix unitaire"} valeur={prixUnitaire} state={{type:"numeric"}} setValeur={setPrixUnitaire}/>
          <CustomInput titre={"Nombre pour place en gros"} valeur={nbPourPlaceGros} state={{type:"numeric"}} setValeur={setNbPourPlaceGros}/>
          <CustomInput titre={"prix en gros"} valeur={prixEnGros} state={{type:"numeric"}} setValeur={setPrixEnGros}/>
          <MonListeEmballageCoffre 
            selectedButtons={selectedButtons} 
            setSelectedButtons={setSelectedButtons}/>
<<<<<<< HEAD
          
          <ListeLieuxRandonnee lieuRandonnee={lieuRandonnee} setLieuRandonnee={setLieuRandonnee}/>
          
=======

          <ListeLieuxRandonnee lieuRandonnee={lieuRandonnee} setLieuRandonnee={setLieuRandonnee}/>

>>>>>>> 3da4c8d (repush)
          <Vendre data={{
            nom,prenom,adresse,
            email,telephone,dateDeDepart,
            nombrePlace: nbPlace,
            prix: prixUnitaire,
            nbPrixEnGros: nbPourPlaceGros,
            prixEnGros,
            selectedButtons,
            lieuRandonnee,
     }}
            />
<<<<<<< HEAD
          <View style={{height:200}}/>
=======
          <View style={{height:vH*0.25}}/>
>>>>>>> 3da4c8d (repush)

        </ScrollView>
     </View>
   )
}

export default ListeCustomInput