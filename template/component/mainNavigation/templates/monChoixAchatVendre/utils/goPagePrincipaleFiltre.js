import {CommonActions} from '@react-navigation/native'
const goPagePrincipaleFiltre = (liste,navigation) => {

  console.log('liste avant acheter :',liste)
  let showMessageVide = false;
  if(liste.liste.length === 0){
    showMessageVide = true;
  }
  navigation.dispatch(
    CommonActions.reset(
      {
        index:0,
        routes:[{name:'Acheter',params:{listeAchatsFiltre: liste, showMessageVide: showMessageVide}}]
      }
    )
  )

}

export default goPagePrincipaleFiltre;