import {Text,View} from 'react-native'

const Description = ({styles,item}) => {
  return(
    <View>
            <Text style={styles.title}>{`${item.vendeur.nom} ${item.vendeur.prenom}`}</Text>
            <Text style={styles.details}>{`Nombre de place: ${item.vente.nombrePlace}`}</Text>
            <Text style={styles.details}>{`prix d'une place: ${item.vente.prix}`}</Text>
            <Text style={styles.details}>{item.vente.nbPrixEnGros ? `offre pour ${item.vente.nbPrixEnGros} places achetées`:``}</Text>
            <Text style={styles.details}>{item.vente.prixEnGros ? `${item.vente.prixEnGros} €`:``}</Text>
            <Text style={styles.details}>Emballage accepté dans la voiture :</Text>
            <Text style={styles.details}>{ item.vente.emballageCoffre.sachet == true ? `Sachet`:``}</Text>
            <Text style={styles.details}>{ item.vente.emballageCoffre.carton ? `Carton`:``}</Text>
            <Text style={styles.details}>{ item.vente.emballageCoffre.doggybag ? `Doggybag`:``}</Text>
            
          </View>
  )
}

export default Description;