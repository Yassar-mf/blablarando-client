
const handlePress = (titre, setBarDeReChercheAffichee,navigation,route,handlePressCallback) => {


    console.log('rooute params :',route.params)
    
    const email = route.params.monEmail;

    if(titre == "RESERVER PLACE(S)"){
        console.log('Avant modification :',setBarDeReChercheAffichee)
        
        setBarDeReChercheAffichee(true)
        
        console.log('Après modification demandée');
    }

    if(titre == "PROPOSER PLACE(S)"){
        navigation.navigate("Vendre",email)
    }

}

export default handlePress;