import {View, ScrollView,Dimensions} from 'react-native'
import Vendre from './BoutonVendre'
import MonListeEmballageCoffre from './listePackage/listeDesPackages'
import ListeLieuxRandonnee from './ViewLieuRandonnee'
import CustomInput from './CustomInput'
import DateHeurView from './dateHeureView'
const {width:vW,height:vH} = Dimensions.get('window').height
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


                          lieuRandonnee, setLieuRandonnee}) => {
   return(
     <View style={{height:vH, padding: vW*0.003, paddingVertical: vH*0.005, paddingBottom: vH*0.25}}>
        <ScrollView contentContainerStyle={{flexWrap: 1}}>
          <CustomInput titre={"Nom"} valeur={nom} state={{type:""}} setValeur={setNom}/>
          <CustomInput titre={"Prenom"} valeur={prenom} state={{type:""}} setValeur={setPrenom}/>
          <CustomInput titre={"Adresse"} valeur={adresse} state={{type:""}} setValeur={setAdresse}/>
          <CustomInput titre={"email"} valeur={email} state={{type:"email"}} setValeur={setEmail}/>
          <CustomInput titre={"telephone"} valeur={telephone} state={{type:"numeric"}} setValeur={setTelephone}/>


          <DateHeurView date={dateDeDepart} setDate={setDateDeDepart} />

          <CustomInput titre={"Nombre de place"} valeur={nbPlace} state={{type:"numeric"}} setValeur={setNbPlace}/>
          <CustomInput titre={"Prix unitaire"} valeur={prixUnitaire} state={{type:"numeric"}} setValeur={setPrixUnitaire}/>
          <CustomInput titre={"Nombre pour place en gros"} valeur={nbPourPlaceGros} state={{type:"numeric"}} setValeur={setNbPourPlaceGros}/>
          <CustomInput titre={"prix en gros"} valeur={prixEnGros} state={{type:"numeric"}} setValeur={setPrixEnGros}/>
          <MonListeEmballageCoffre 
            selectedButtons={selectedButtons} 
            setSelectedButtons={setSelectedButtons}/>


          <ListeLieuxRandonnee lieuRandonnee={lieuRandonnee} setLieuRandonnee={setLieuRandonnee}/>


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

          <View style={{height:vH*0.25}}/>

        </ScrollView>
     </View>
   )
}

export default ListeCustomInput