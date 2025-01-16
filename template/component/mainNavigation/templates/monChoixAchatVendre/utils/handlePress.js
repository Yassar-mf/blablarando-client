const handlePress = (titre, setBarDeReChercheAffichee, navigation, route) => {

    console.log('rooute params :',route.params)
    
    const email = route.params.monEmail;

    if(titre == "ACHETER"){
        setBarDeReChercheAffichee(true)
    }

    if(titre == "VENDRE"){
        navigation.navigate("Vendre",email)
    }

}

export default handlePress;