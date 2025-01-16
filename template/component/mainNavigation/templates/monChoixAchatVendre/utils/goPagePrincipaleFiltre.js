const goPagePrincipaleFiltre = (liste,navigation) => {

  console.log('liste avant acheter :',liste)
  navigation.navigate('Acheter',{listeAchatsFiltre: liste})

}

export default goPagePrincipaleFiltre;