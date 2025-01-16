const obtenirUtilisateur = async (route) => {

  const utilisateur = route.params.utilisateur
  return utilisateur
}

export default obtenirUtilisateur;