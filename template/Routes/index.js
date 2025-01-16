import TopTab from '../component/topTab/monIndex'
import BottomTab from '../component/bottomTab/monIndex'
import MainNavigation from '../component/mainNavigation/monIndex'
import MonAccueil from '../component/mainNavigation/templates/accueil/index'
import MonLogin from '../component/mainNavigation/templates/monLogin/index'
import MonIscription from '../component/mainNavigation/templates/monRegister/register'
import MonMotDePasseOublie from '../component/mainNavigation/templates/monMotDePasseOublie/index'
import MonVendre from '../component/mainNavigation/templates/monVendre/components/monFormVendeur'
import SaisieNouveauMotDePasse from "../component/mainNavigation/templates/monMotDePasseOublie/saisieNouveauMotDePasse"
import MonPageIntermediaire from '../component/mainNavigation/templates/monLogin/pageIntermediaireBienvenue'
import MonChoixAchatVendre from '../component/mainNavigation/templates/monChoixAchatVendre'

import PaiementEnAttente from '../component/mainNavigation/templates/monPaiementEnAttenteListe'

import PaiementScreens from './PaiementStack'

const mesRoutes = {
    TopTab,
    BottomTab,
    MainNavigation,
    MonAccueil,
    MonLogin,
    MonIscription,
    MonMotDePasseOublie,
    MonVendre,
    SaisieNouveauMotDePasse,
    MonPageIntermediaire,
    MonChoixAchatVendre,
    PaiementScreens
}

export default mesRoutes