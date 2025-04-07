import {Text,View} from 'react-native'

const Description = ({styles,item}) => {
  return(
    <View style={styles.txtDescContainer}>
            <Text style={styles.title}>{`${item.vendeur.nom} ${item.vendeur.prenom}`}</Text>
            <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
              <View style={{width:"100%",flexDirection:"row", justifyContent:'space-between'}}>
                <Text style={styles.details}>{`Nombre de place: ${item.vente.nombrePlace}`}</Text>
                <Text style={styles.details}>{`prix d'une place: ${item.vente.prix}`}</Text>
              </View>
              <Text style={styles.details}>
                {item.vente.nbPrixEnGros ? `offre pour ${item.vente.nbPrixEnGros} places achetées`:``}</Text>
            </View>
            <Text style={styles.details}>{item.vente.prixEnGros ? `${item.vente.prixEnGros} €`:``}</Text>
            <Text style={styles.details}>Emballage accepté dans la voiture :</Text>
            <View style={{width:"100%"}}>
              { item.vente.emballageCoffre.sachet == true 
              ? <Text style={styles.details}>Sachet</Text>:<></>}
              {item.vente.emballageCoffre.carton 
              ? <Text style={styles.details}>Carton</Text>:<></>}
              <Text style={styles.details}>{ item.vente.emballageCoffre.doggybag 
              ? <Text style={styles.details}>Doggybag</Text>:<></>}</Text>
            </View>
          </View>
  )
}

export default Description;